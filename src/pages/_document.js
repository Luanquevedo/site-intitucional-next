import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        {/* 🔹 Fontes do Google Fonts (sem alterações) */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Eczar:wght@400..800&family=Enriqueta:wght@400;500;600;700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" 
          rel="stylesheet"
        />
        {/* 🔹 Favicon */}
        <link rel="icon" href="/favicon.png" />
        
        {/* 🔹 Meta tags para SEO */}
        <meta name="description" content="No Cuka Eventos, oferecemos um serviço de buffet personalizado e completo para eventos especiais, como bodas, noivados e jantares familiares." />
        <meta name="keywords" content="buffet personalizado, eventos, noivados, bodas, jantares, almoços familiares, serviço completo, eventos especiais" />
        <meta property="og:title" content="Cuka Eventos - Buffet Personalizado para Seu Evento" />
        <meta property="og:description" content="Proporcione um evento memorável com nosso serviço de buffet completo e personalizado. Garantimos sofisticação, qualidade e um atendimento premium." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://www.cukaeventos.com.br" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cuka Eventos - Buffet Personalizado e Eventos" />
        <meta name="twitter:description" content="Proporcione um evento memorável com nosso serviço de buffet completo e personalizado. Garantimos sofisticação, qualidade e um atendimento premium." />
        <meta name="twitter:image" content="/images/og-image.jpg" />
        
        {/* 🔹 Pré-carregamento das fontes */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Eczar:wght@400..800&family=Enriqueta:wght@400;500;600;700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" as="font" type="font/woff2" crossorigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
