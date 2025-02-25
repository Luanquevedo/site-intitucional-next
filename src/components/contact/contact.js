import React from 'react';
import Head from 'next/head';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Áreas de Atendimento - Tempero da Grazzy</title>
        <meta name="description" content="Confira as áreas de atendimento da Tempero da Grazzy, incluindo as principais regiões de São Paulo e outras cidades do Brasil como Brasília, Recife, Ceará, Minas Gerais e Florianópolis." />
        <meta name="keywords" content="áreas de atendimento, São Paulo, Brasília, Recife, Ceará, Minas Gerais, Florianópolis, serviços de buffet, catering, eventos" />
      </Head>

      <section>
        <header>
          <h1>Áreas de Atendimento</h1>
        </header>
        
        <article>
          <h2>Localidades atendidas</h2>
          <p><strong>São Paulo</strong> – Jardins, Higienópolis, Zonas Sul, Leste e Oeste</p>
          <p><strong>Outras regiões atendidas:</strong> <strong>Brasília, Recife, Ceará, Minas Gerais, Florianópolis</strong></p>
        </article>

        <footer>
          <p>Se a sua cidade não estiver listada, entre em contato conosco para mais informações sobre a expansão das nossas áreas de atendimento.</p>
        </footer>
      </section>
    </div>
  );
};

export default Contact;
