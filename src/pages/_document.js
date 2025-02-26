import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        {/* 🔹 Importando as fontes do Google Fonts */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Eczar:wght@400..800&family=Enriqueta:wght@400;500;600;700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" 
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
