import React from 'react';
import Head from 'next/head';
import Image from 'next/image'; // Importando o componente Next.js Image

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
        <title>Diferenciais - Cuka Eventos</title>
        <meta
          name="description"
          content="Conheça os diferenciais do Cuka Eventos, oferecendo personalização, ingredientes selecionados e atendimento exclusivo em cada evento."
        />
        <meta
          name="keywords"
          content="diferenciais, personalização de evento, ingredientes de qualidade, equipe especializada, buffet exclusivo"
        />
      </Head>

      <div className="About__Content">
        {/* Header para indicar o início da seção */}
        <header>
          <h2>Diferenciais</h2>
        </header>

        <article className="About__Content__Itens">
          <h3>O que nos torna únicos</h3>
          <ul>
            {diferenciais.map((diferencial, index) => (
              <li key={diferencial} className="differential-item"> {/* Usando o próprio diferencial como chave */}
                <Image 
                  src="/images/seta.svg"  // Caminho da imagem otimizada
                  alt={`Ícone de seta indicando: ${diferencial}`}
                  className="differential-icon"
                  width={24}    // Tamanho da imagem
                  height={24}   // Tamanho da imagem
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
