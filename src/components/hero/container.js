import React from 'react';
import Link from 'next/link';

const HeroContainer = () => {
  return (
    <section className="Hero__Container">
      <article className="Hero__Container__Experience">
        <p>
          Transformamos seu evento em uma <strong>experiência única</strong>, personalizada para refletir sua história, cultura e gostos. Nosso <strong>buffet especializado</strong> oferece um serviço completo, garantindo <strong>sofisticação, qualidade e atenção a cada detalhe</strong>.
        </p>
      </article>

      <article className="Hero__Container__Differentials">
        <ul >
          <li className='itens'>
            <img src="images/seta.svg" alt="Ícone de seta indicando diferencial sobre eventos personalizados" />
            <p><strong>Eventos Personalizados</strong> – Bodas, noivados, jantares e almoços familiares.</p>
          </li>
          <li className='itens'>
            <img src="images/seta.svg" alt="Ícone de seta indicando diferencial sobre gastronomia refinada" />
            <p><strong>Gastronomia Refinada</strong> – Pratos preparados com ingredientes selecionados de alta qualidade.</p>
          </li>
          <li className='itens'>
            <img src="images/seta.svg" alt="Ícone de seta indicando diferencial sobre atendimento premium" />
            <p><strong>Atendimento Premium</strong> – Equipe treinada em etiqueta e primeiros socorros.</p>
          </li>
          <li className='itens'>
            <img src="images/seta.svg" alt="Ícone de seta indicando diferencial sobre serviço completo" />
            <p><strong>Serviço Completo</strong> – Do convite ao manobrista, incluindo translado para convidados com mobilidade reduzida.</p>
          </li>
        </ul>
      </article>
      <div className='Hero__Container__B'>
      <Link href="/form" prefetch={false}>
        <button aria-label="Solicite um orçamento"> Solicite um Orçamento</button>
      </Link>
      </div>
    </section>
  );
};

export default HeroContainer;
