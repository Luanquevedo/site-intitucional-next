import React, { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const card = [
  { id: 1, image: '/images/c6.jpg', alt: 'Imagem 1: Exemplo de prato servido' },
  { id: 2, image: '/images/c7.jpg', alt: 'Imagem 2: Exemplo de prato servido' },
  { id: 3, image: '/images/c8.jpg', alt: 'Imagem 3: Exemplo de prato servido' },
  { id: 4, image: '/images/c9.jpg', alt: 'Imagem 4: Exemplo de prato servido' },
  { id: 5, image: '/images/c10.jpg', alt: 'Imagem 5: Exemplo de prato servido' },
  { id: 6, image: '/images/c11.jpg', alt: 'Imagem 2: Exemplo de prato servido' },
  { id: 7, image: '/images/c12.jpg', alt: 'Imagem 3: Exemplo de prato servido' },
  { id: 8, image: '/images/c13.jpg', alt: 'Imagem 4: Exemplo de prato servido' },
  { id: 9, image: '/images/c14.jpg', alt: 'Imagem 5: Exemplo de prato servido' },
  { id: 10, image: '/images/c1.png', alt: 'Imagem 1: Exemplo de prato servido' },
  { id: 11, image: '/images/c2.png', alt: 'Imagem 2: Exemplo de prato servido' },
  { id: 12, image: '/images/c3.png', alt: 'Imagem 3: Exemplo de prato servido' },
  { id: 13, image: '/images/c4.png', alt: 'Imagem 4: Exemplo de prato servido' },
  { id: 14, image: '/images/c5.png', alt: 'Imagem 5: Exemplo de prato servido' },
];

// Memoize para evitar renderizações desnecessárias
const CardCarrousel = memo(() => {
  return (
    <section className="card__carousel" aria-labelledby="gallery-title">
      <h2 id="gallery-title" className="card__carousel__title">Galeria Exemplo</h2>
      <Swiper
        className="card__carousel__container"
        slidesPerView={4}
        spaceBetween={20}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1500}
        loop={true}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
      >
        {card.map((item) => (
          <SwiperSlide key={item.id} className="card__carousel__slide">
            <img
              src={item.image}
              alt={item.alt}
              className="card-carousel__image"
              loading="lazy"
              width={300} // Tamanho recomendado de acordo com o design
              height={300}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
});

export default CardCarrousel;
