import React from 'react';
import Link from 'next/link';

const HeroContainer = () => {
  return (
    <section className="Hero__Container" role="region" aria-labelledby="hero-section">
      <article className="Hero__Container__Experience">
        <p>
          No <strong>Tempero da Grazzy</strong>, acreditamos que a culinária vai muito além do sabor – ela é <span className="highlight">afeto, memória e história</span>. Criamos experiências gastronômicas exclusivas, trazendo o melhor dos sabores em cada evento.
        </p>
      </article>

      <article className="Hero__Container__Differentials">
        <h3 id="hero-section">O que nos torna únicos?</h3>
        <ul>
          <li className="itens">
            <img 
              src="images/seta.svg" 
              alt="Ícone de seta indicando diferencial sobre gastronomia afetiva" 
              loading="lazy" 
            />
            <p><strong className="highlight">Culinária Afetiva</strong> – Pratos que resgatam memórias e traduzem emoções através do sabor. Cada refeição é uma história, cada ingrediente é um toque de carinho.</p>
          </li>
          <li className="itens">
            <img 
              src="images/seta.svg" 
              alt="Ícone de seta indicando diferencial sobre eventos personalizados" 
              loading="lazy" 
            />
            <p><strong>Eventos Personalizados</strong> – Criamos menus exclusivos para noivados, bodas, jantares e almoços familiares.</p>
          </li>
          <li className="itens">
            <img 
              src="images/seta.svg" 
              alt="Ícone de seta indicando diferencial sobre ingredientes selecionados" 
              loading="lazy" 
            />
            <p><strong>Ingredientes Selecionados</strong> – Utilizamos produtos de alta qualidade para oferecer uma experiência sofisticada.</p>
          </li>
          <li className="itens">
            <img 
              src="images/seta.svg" 
              alt="Ícone de seta indicando diferencial sobre atendimento premium" 
              loading="lazy" 
            />
            <p><strong>Atendimento Premium</strong> – Equipe altamente capacitada, garantindo excelência e atenção a cada detalhe.</p>
          </li>
        </ul>
      </article>

      <div className="Hero__Container__B">
        <Link href="/form" prefetch={false}>
          <button aria-label="Solicitar orçamento e criar evento personalizado">Vamos criar juntos seu evento?</button>
        </Link>
      </div>
    </section>
  );
};

export default HeroContainer;
