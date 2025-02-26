import React from 'react';

const WorkContainer = () => {
  return (
    <section className="work__container">
      <header>
        <h2>Serviço Completo</h2>
        <p className='none'>
          Oferecemos uma gama de serviços que garantem a excelência e o conforto para todos os convidados.
        </p>
      </header>
      <div className="work__container__services">
        <article className="work-container__service">
          <h3>Convites Personalizados</h3>
          <p>
            Criamos <strong>convites exclusivos</strong> para cada ocasião.
          </p>
        </article>
        <article className="work-container__service">
          <h3>Manobrista</h3>
          <p>
            Garantimos <strong>conforto e praticidade</strong> para os convidados.
          </p>
        </article>
        <article className="work-container__service">
          <h3>Translado</h3>
          <p>
            Serviço especializado para <strong>convidados com mobilidade reduzida</strong>.
          </p>
        </article>
        <article className="work-container__service">
          <h3>Equipe Especializada</h3>
          <p>
            Profissionais treinados em <strong>etiqueta e primeiros socorros</strong>.
          </p>
        </article>
      </div>
    </section>
  );
};

export default WorkContainer;
