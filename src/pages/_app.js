import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TerraQuiz — Quiz de Geografie</title>
        <meta name="description" content="Aplicație educațională de geografie cu peste 1699 de întrebări, 50 variante BAC, hărți interactive, multiplayer și diplome" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="google-adsense-account" content="ca-pub-7306328079715769" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* iOS Support */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="TerraQuiz" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icon-192.png" />
        
        {/* Theme color (Android browser bar + iOS) */}
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="msapplication-TileColor" content="#1e3a8a" />
        
        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        
        {/* Open Graph (pentru distribuiri Facebook/WhatsApp) */}
        <meta property="og:title" content="TerraQuiz - Geografie pentru BAC" />
        <meta property="og:description" content="1699 întrebări, 50 variante BAC, 10 capitole - platforma educațională de geografie din România" />
        <meta property="og:image" content="https://terraquiz.ro/icon-512.png" />
        <meta property="og:url" content="https://terraquiz.ro" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ro_RO" />
      </Head>
      
      <Script
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7306328079715769"
        crossOrigin="anonymous"
      />
      <Script
        async
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-B7ZW42MTPK"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-B7ZW42MTPK');
        `}
      </Script>
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
