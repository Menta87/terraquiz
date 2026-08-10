const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const REGION_EMOJI = {
  'Europa': '🇪🇺', 'Asia': '🌏', 'Africa': '🌍', 'America de Nord': '🌎',
  'America de Sud': '🌎', 'Oceania': '🏝️', 'Antarctica': '❄️', 'Lumea': '🌐'
};

async function main() {
  const [region, mapType, imageUrl, title, source] = process.argv.slice(2);
  if (!region || !mapType || !imageUrl || !title) {
    console.log('Utilizare: node upload-map.js "Regiune" "physical|political" "URL" "Titlu" "Sursa"');
    process.exit(1);
  }

  console.log('Descarc imaginea...');
  const res = await fetch(imageUrl);
  if (!res.ok) { console.log('EROARE descarcare:', res.status); process.exit(1); }
  const buffer = Buffer.from(await res.arrayBuffer());
  const sizeMB = (buffer.length / 1024 / 1024).toFixed(2);

  const ext = imageUrl.split('.').pop().split('?')[0].toLowerCase();
  const fileName = `${region.toLowerCase().replace(/\s+/g, '-')}-${mapType}-${Date.now()}.${ext}`;

  console.log('Încarc în Supabase Storage...');
  const { error: uploadError } = await supabase.storage.from('continent-maps').upload(fileName, buffer, {
    contentType: ext === 'png' ? 'image/png' : ext === 'svg' ? 'image/svg+xml' : 'image/jpeg'
  });
  if (uploadError) { console.log('EROARE upload:', uploadError.message); process.exit(1); }

  const { data: urlData } = supabase.storage.from('continent-maps').getPublicUrl(fileName);

  const { error: dbError } = await supabase.from('map_downloads').insert({
    region,
    region_emoji: REGION_EMOJI[region] || '🗺️',
    map_type: mapType,
    title,
    image_url: urlData.publicUrl,
    source_attribution: source || 'Domeniu public',
    file_size_mb: parseFloat(sizeMB)
  });
  if (dbError) { console.log('EROARE DB:', dbError.message); process.exit(1); }

  console.log('SUCCESS! Hartă adăugată:', title, `(${sizeMB} MB)`);
  console.log('URL:', urlData.publicUrl);
}

main();
