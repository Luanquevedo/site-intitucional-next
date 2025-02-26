import React from 'react';

const segmentos = [
  { id: 1, image: '/images/card-noiva.png', title: 'Noivados' },
  { id: 2, image: '/images/card-bodas.png', title: 'Bodas' },
  { id: 3, image: '/images/card-geral.png', title: 'Jantares e Almoços Familiares' },
];

const Work = () => {
  return (
    <section className='Work'>
      <div className='Work__Container'>
      <header>
        <h2>Serviços</h2>
      </header>

      <article className='Work__Container__Content'>
        <h3>Buffet Personalizado</h3>
        <p>
          Oferecemos um <strong>cardápio exclusivo e adaptável</strong> às suas preferências, garantindo uma experiência gastronômica sofisticada e memorável para seus convidados.
        </p>
      </article>

      <article className='Work__Container__Card'>
        <h3>Tipos de Eventos</h3>
        <ul>
          {segmentos.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={`Evento: ${item.title}`} />
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      </article>
      </div>
    </section>
  );
};

export default Work;
