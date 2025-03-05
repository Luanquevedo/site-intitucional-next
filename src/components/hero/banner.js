import React from 'react';

const HeroBanner = () => {
  return (
    <header className="Hero__Banner" role="banner" aria-labelledby="hero-title">
      <h1 id="hero-title" className="Hero__Banner__Destaque">
        Cuka Eventos
      </h1>
      <h2 className="Hero__Banner__Complemento">
        Sabores que contam histórias e transformam momentos em memórias.
      </h2>
    </header>
  );
}

export default HeroBanner;
