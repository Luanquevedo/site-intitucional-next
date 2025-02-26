import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const card = [
  { id: 1, image: '/images/c1.png', alt: 'Imagem 1: Exemplo de serviço de buffet elegante em evento' },
  { id: 2, image: '/images/c2.png', alt: 'Imagem 2: Decoração sofisticada para eventos especiais' },
  { id: 3, image: '/images/c3.png', alt: 'Imagem 3: Apresentação de pratos gourmet em buffet' },
  { id: 4, image: '/images/c4.png', alt: 'Imagem 4: Serviço de catering para eventos corporativos' },
  { id: 5, image: '/images/c5.png', alt: 'Imagem 5: Buffet personalizado com decoração temática' },
];

const CardCarrousel = () => {
  return (
    <div className="card__carousel">
      <h2 className="card__carousel__title">Galeria</h2>
      <Swiper
        className="card__carousel__container"
        slidesPerView={4} // Exibe 3 imagens no desktop
        spaceBetween={20}
        autoplay={{ delay: 2, disableOnInteraction: false }}
        speed={5000}
        loop={true} // 🟢 Ativa o loop infinito
        modules={[Pagination, Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 2, // No mobile, exibe 2 imagens
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3, // No tablet, exibe 3 imagens
            spaceBetween: 0,
          },
        }}
      >
        {card.map((item) => (
          <SwiperSlide key={item.id} className="card__carousel__slide">
            <img src={item.image} alt={item.alt} className="card-carousel__image" loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCarrousel;
