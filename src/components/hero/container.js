import React from 'react';

const HeroContainer = () => {
  return (
    <section className="hero-container">
      <article className="hero-container__experience">
        <h2>Experiência Única para Seu Evento</h2>
        <p>
          Transformamos seu evento em uma <strong>experiência única</strong>, personalizada para refletir sua história, cultura e gostos. Nosso <strong>buffet especializado</strong> oferece um serviço completo, garantindo <strong>sofisticação, qualidade e atenção a cada detalhe</strong>.
        </p>
      </article>

      <article className="hero-container__differentials">
        <h2>Nossos Diferenciais</h2>
        <ul>
          <li>
            <img src="images/seta.svg" alt="Ícone de seta indicando diferencial sobre eventos personalizados" />
            <p><strong>Eventos Personalizados</strong> – Bodas, noivados, jantares e almoços familiares.</p>
          </li>
          <li>
            <img src="images/seta.svg" alt="Ícone de seta indicando diferencial sobre gastronomia refinada" />
            <p><strong>Gastronomia Refinada</strong> – Pratos preparados com ingredientes selecionados de alta qualidade.</p>
          </li>
          <li>
            <img src="images/seta.svg" alt="Ícone de seta indicando diferencial sobre atendimento premium" />
            <p><strong>Atendimento Premium</strong> – Equipe treinada em etiqueta e primeiros socorros.</p>
          </li>
          <li>
            <img src="images/seta.svg" alt="Ícone de seta indicando diferencial sobre serviço completo" />
            <p><strong>Serviço Completo</strong> – Do convite ao manobrista, incluindo translado para convidados com mobilidade reduzida.</p>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default HeroContainer;
