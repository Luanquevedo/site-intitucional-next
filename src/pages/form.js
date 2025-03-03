import dynamic from 'next/dynamic';
import Head from 'next/head';

// Lazy loading do componente do formulário
const FormWhatsApp = dynamic(() => import('@/components/mensage/formcomponent'), { ssr: false });

export default function Form() {
  return (
    <div>
      <Head>
        <meta name="description" content="Entre em contato com o Tempero da Grazzy e solicite um orçamento personalizado para o seu evento." />
        <meta name="keywords" content="formulário, orçamento, contato, Tempero da Grazzy, eventos, buffet, noivados, bodas, jantares" />
        <meta name="author" content="Tempero da Grazzy" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Entre em Contato - Tempero da Grazzy" />
        <meta property="og:description" content="Preencha o formulário e solicite seu orçamento para um buffet personalizado e exclusivo para o seu evento." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://www.temperodagrazzy.com.br/contato" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tempero da Grazzy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Entre em Contato - Tempero da Grazzy" />
        <meta name="twitter:description" content="Solicite um orçamento para o seu evento personalizado com o Tempero da Grazzy." />
        <meta name="twitter:image" content="/images/og-image.jpg" />
      </Head>

      <section id="contact">
        <FormWhatsApp />
      </section>
    </div>
  );
}
