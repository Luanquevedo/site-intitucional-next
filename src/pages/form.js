import dynamic from 'next/dynamic';
import Head from 'next/head';

// Lazy loading do componente do formulário
const FormWhatsApp = dynamic(() => import('@/components/mensage/formcomponent'), { ssr: false });

export default function Form() {
  return (
    <div>
      <Head>
        <meta name="description" content="Entre em contato com o Viva Eventos e solicite um orçamento personalizado para o seu evento." />
        <meta name="keywords" content="formulário, orçamento, contato, Viva Eventos, eventos, buffet, noivados, bodas, jantares" />
        <meta name="author" content="Viva Eventos" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Entre em Contato - Viva Eventos" />
        <meta property="og:description" content="Preencha o formulário e solicite seu orçamento para um buffet personalizado e exclusivo para o seu evento." />
        <meta property="og:image" content="/images/og-cuka.png" />
        <meta property="og:url" content="https://www.vivaeventos.com.br/contato" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Viva Eventos" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Entre em Contato - Viva Eventos" />
        <meta name="twitter:description" content="Solicite um orçamento para o seu evento personalizado com o Viva Eventos." />
        <meta name="twitter:image" content="/images/og-cuka.png" />
      </Head>

      <section id="contact">
        <FormWhatsApp />
      </section>
    </div>
  );
}
