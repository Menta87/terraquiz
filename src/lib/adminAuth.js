import { createClient } from '@supabase/supabase-js';

// Middleware server-side pentru pagini admin
// Utilizare: import { requireAdmin } from '../../lib/adminAuth';
// Apoi: export const getServerSideProps = requireAdmin(async (ctx) => { ... });

export function requireAdmin(handler) {
  return async (ctx) => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // Extrag token din cookie
    const authCookie = ctx.req.cookies['sb-access-token'] || ctx.req.cookies['sb:token'];
    let userId = null;
    let userEmail = null;

    // Verific dacă avem cookie de auth
    const cookieHeader = ctx.req.headers.cookie || '';
    const supabaseCookies = Object.keys(ctx.req.cookies).filter(k => k.startsWith('sb-'));
    
    if (supabaseCookies.length > 0) {
      // Extrag token din supabase cookies
      try {
        for (const cookieName of supabaseCookies) {
          const cookieValue = ctx.req.cookies[cookieName];
          if (cookieValue && cookieValue.includes('access_token')) {
            const parsed = JSON.parse(decodeURIComponent(cookieValue));
            if (parsed?.access_token) {
              const { data } = await supabase.auth.getUser(parsed.access_token);
              if (data?.user) {
                userId = data.user.id;
                userEmail = data.user.email;
                break;
              }
            }
          }
        }
      } catch (e) { console.error('Cookie parse error:', e); }
    }

    if (!userId) {
      return {
        redirect: {
          destination: '/login?redirect=' + encodeURIComponent(ctx.resolvedUrl),
          permanent: false
        }
      };
    }

    // Verific dacă e admin
    const { data: isAdmin } = await supabase.rpc('is_admin', { p_user_id: userId });
    
    if (!isAdmin) {
      // Log tentativă de acces neautorizat
      await supabase.from('admin_access_log').insert({
        user_id: userId,
        email: userEmail,
        page: ctx.resolvedUrl + ' [DENIED]',
        ip_address: ctx.req.headers['x-forwarded-for'] || ctx.req.socket?.remoteAddress || 'unknown',
        user_agent: ctx.req.headers['user-agent'] || 'unknown'
      });

      return {
        redirect: {
          destination: '/?error=access_denied',
          permanent: false
        }
      };
    }

    // Log acces reușit
    await supabase.from('admin_access_log').insert({
      user_id: userId,
      email: userEmail,
      page: ctx.resolvedUrl,
      ip_address: ctx.req.headers['x-forwarded-for'] || ctx.req.socket?.remoteAddress || 'unknown',
      user_agent: ctx.req.headers['user-agent'] || 'unknown'
    });

    // Continuu cu handler-ul original
    const result = handler ? await handler(ctx) : { props: {} };
    return {
      ...result,
      props: {
        ...(result.props || {}),
        adminUser: { id: userId, email: userEmail }
      }
    };
  };
}
