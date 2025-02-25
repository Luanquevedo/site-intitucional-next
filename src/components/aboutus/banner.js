import React from 'react';
import Head from 'next/head';

const AboutBanner = () => {
  return (
    <section>
      <Head>
        <title>Sobre Nós - Tempero da Grazzy</title>
        <meta
          name="description"
          content="Conheça a história e o compromisso do Tempero da Grazzy, oferecendo buffet sofisticado e personalizado para eventos especiais."
        />
        <meta
          name="keywords"
          content="Tempero da Grazzy, buffet sofisticado, evento personalizado, gastronomia, serviços de buffet"
        />
      </Head>

      <header>
        <h1>Sobre Nós</h1>
      </header>

      <article>
        <header>
          <h2>Nossa História</h2>
        </header>
        <p>
          No <strong>Tempero da Grazzy</strong>, acreditamos que cada evento conta uma história única. Nossa trajetória começou com a paixão pela gastronomia e pela arte de receber bem.
        </p>
        <p>
          Ao longo dos anos, aprimoramos nossos serviços para oferecer um <strong>buffet sofisticado e personalizado</strong>, refletindo o gosto e as preferências de cada cliente.
        </p>
      </article>

      <article>
        <header>
          <h2>Nosso Compromisso</h2>
        </header>
        <p>
          Nosso objetivo é proporcionar um serviço impecável, com atenção a cada detalhe, garantindo que seu evento seja exatamente como sonhou.
        </p>
        <p>
          Prezamos pela <strong>qualidade dos ingredientes</strong>, pela <strong>elegância na apresentação</strong> e pela <strong>excelência no atendimento</strong>.
        </p>
      </article>
    </section>
  );
};

export default AboutBanner;
