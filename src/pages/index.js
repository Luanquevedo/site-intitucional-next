import { useEffect } from 'react';
import Head from 'next/head';
import HeroBanner from "@/components/hero/banner";
import HeroContainer from "@/components/hero/container";
import AboutBanner from "@/components/aboutus/banner";
import AboutContainer from "@/components/aboutus/container";
import Work from "@/components/works/work";
import WorkContainer from "@/components/works/container";
import CardCarrousel from "@/components/galery/card";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

export default function Home() {
  useEffect(() => {
    // Verifica se há uma hash na URL e faz o scroll para a seção
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1); // Remove o '#' da hash
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []); // O efeito só será executado uma vez, quando o componente for montado

  return (
    <div>
      <Head>
        <meta name="description" content="No Tempero da Grazzy, oferecemos um buffet personalizado e adaptável, com serviços completos para eventos como bodas, noivados e jantares familiares. Garantimos sofisticação e qualidade." />
        <meta name="keywords" content="buffet, eventos personalizados, noivados, bodas, jantares, almoços, sofisticação, qualidade, serviço completo" />
        <meta name="author" content="Tempero da Grazzy" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Tempero da Grazzy - Buffet Personalizado e Exclusivo para Eventos" />
        <meta property="og:description" content="Proporcione uma experiência única em seu evento com o Tempero da Grazzy. Buffet personalizado com ingredientes selecionados e atendimento de excelência." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://www.temperodagrazzy.com.br" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tempero da Grazzy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tempero da Grazzy - Buffet Personalizado e Exclusivo para Eventos" />
        <meta name="twitter:description" content="Oferecemos um buffet com a melhor qualidade, ideal para eventos inesquecíveis." />
        <meta name="twitter:image" content="/images/og-image.jpg" />
      </Head>
      <section id="home">
        <HeroBanner />
        <HeroContainer />
      </section>
      <section id="about">
        <AboutBanner />
        <AboutContainer />
      </section>
      <section id="services">
        <Work />
        <WorkContainer />
        <CardCarrousel />
      </section>
      <section id="atendimento">
        <Contact />
      </section>
    </div>
  );
}
