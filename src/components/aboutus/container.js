import React from 'react';
import Head from 'next/head';

const diferenciais = [
  'Personalização total do evento',
  'Ingredientes selecionados de alta qualidade',
  'Equipe experiente e especializada',
  'Atendimento exclusivo e dedicado'
];

const AboutContainer = () => {
  return (
    <section>
      <Head>
        <title>Diferenciais - Tempero da Grazzy</title>
        <meta
          name="description"
          content="Conheça os diferenciais do Tempero da Grazzy, oferecendo personalização, ingredientes selecionados e atendimento exclusivo em cada evento."
        />
        <meta
          name="keywords"
          content="diferenciais, personalização de evento, ingredientes de qualidade, equipe especializada, buffet exclusivo"
        />
      </Head>
      <div className='About__Content'>
      <header>
        <h2>Diferenciais</h2>
      </header>

      <article className='About__Content__Itens'>
        <h3>O que nos torna únicos</h3>
        <ul>
          {diferenciais.map((diferencial, index) => (
            <li key={index} className="differential-item">
              <img 
                src="images/seta.svg" 
                alt={`Ícone de seta indicando: ${diferencial}`} 
                className="differential-icon"
              />
              <p>{diferencial}</p>
            </li>
          ))}
        </ul>
      </article>
      </div>
    </section>
  );
};

export default AboutContainer;
