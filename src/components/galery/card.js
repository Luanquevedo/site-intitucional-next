import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const card = [
  { id: 1, image: '/images/c1.png', alt: 'Imagem 1: Exemplo de serviço de buffet elegante em evento' },
  { id: 2, image: '/images/c2.png', alt: 'Imagem 2: Decoração sofisticada para eventos especiais' },
  { id: 3, image: '/images/c3.png', alt: 'Imagem 3: Apresentação de pratos gourmet em buffet' },
  { id: 4, image: '/images/c4.png', alt: 'Imagem 4: Serviço de catering para eventos corporativos' },
  { id: 5, image: '/images/c5.png', alt: 'Imagem 5: Buffet personalizado com decoração temática' },
];

const CardCarrousel = () => {
  return (
    <div className="card-carousel">
      <h2 className="card-carousel__title">Galeria de Eventos</h2>
      <div className="card-carousel__container">
        <Swiper
          slidesPerView={3}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 300, disableOnInteraction: false }}
          speed={700}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2, // Ajusta para 1 slide por vez em telas menores
            },
          }}
        >
          {card.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.image}
                alt={item.alt}
                className="card-carousel__image"
                loading='lazy'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CardCarrousel;
