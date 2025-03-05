import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Áreas de Atendimento - Cuka Eventos</title>
        <meta
          name="description"
          content="Confira as áreas de atendimento do Cuka Eventos, incluindo as principais regiões de São Paulo e outras cidades do Brasil como Brasília, Recife, Ceará, Minas Gerais e Florianópolis."
        />
        <meta
          name="keywords"
          content="áreas de atendimento, São Paulo, Brasília, Recife, Ceará, Minas Gerais, Florianópolis, serviços de buffet, catering, eventos"
        />
      </Head>

      <section className="Contact">
        <header>
          <h2>Áreas de Atendimento</h2>
        </header>

        <article className="Contact__Content">
          <p>
            <strong>São Paulo</strong> – Jardins, Higienópolis, Zonas Sul, Leste e Oeste
          </p>
          <p>
            <strong>Brasília, Recife, Ceará, Minas Gerais, Florianópolis</strong>
          </p>
        </article>
      </section>

      <div className="B">
        <Link href="/form">
          <button type="button" aria-label="Solicite um orçamento">
            Solicite um Orçamento
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;