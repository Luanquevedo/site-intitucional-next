import React from 'react';

const WorkContainer = () => {
  return (
    <section className="work-container">
      <header>
        <h2>Serviço Completo</h2>
        <p>
          Oferecemos uma gama de serviços que garantem a excelência e o conforto para todos os convidados.
        </p>
      </header>
      <div className="work-container__services">
        <article className="work-container__service">
          <h3>Convites Personalizados</h3>
          <p>
            Criamos <strong>convites exclusivos</strong> para cada ocasião, com design e personalização únicos, tornando seu evento ainda mais especial.
          </p>
        </article>
        <article className="work-container__service">
          <h3>Manobrista</h3>
          <p>
            Garantimos <strong>conforto e praticidade</strong> para os convidados, oferecendo estacionamento e apoio personalizado.
          </p>
        </article>
        <article className="work-container__service">
          <h3>Translado</h3>
          <p>
            Serviço especializado para <strong>convidados com mobilidade reduzida</strong>, garantindo acessibilidade e conforto em todo o evento.
          </p>
        </article>
        <article className="work-container__service">
          <h3>Equipe Especializada</h3>
          <p>
            Profissionais treinados em <strong>etiqueta e primeiros socorros</strong>, proporcionando segurança e excelência no atendimento.
          </p>
        </article>
      </div>
    </section>
  );
};

export default WorkContainer;
