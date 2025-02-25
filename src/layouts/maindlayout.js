import Head from "next/head";

export default function MainLayout({ children }) {
    return (
        <>
            <Head>
                <html lang="pt-br" />
                <title>Tempero da Grazzy - Buffet Personalizado e Eventos</title>
                <meta name="description" content="No Tempero da Grazzy, oferecemos um serviço de buffet personalizado e completo para eventos especiais, como bodas, noivados e jantares familiares." />
                <meta name="keywords" content="buffet personalizado, eventos, noivados, bodas, jantares, almoços familiares, serviço completo, eventos especiais" />
                <meta property="og:title" content="Tempero da Grazzy - Buffet Personalizado para Seu Evento" />
                <meta property="og:description" content="Proporcione um evento memorável com nosso serviço de buffet completo e personalizado. Garantimos sofisticação, qualidade e um atendimento premium." />
                <meta property="og:image" content="/images/og-image.jpg" /> {/* Use uma imagem de destaque */}
                <meta property="og:url" content="https://www.temperodagrazzy.com.br" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Tempero da Grazzy - Buffet Personalizado e Eventos" />
                <meta name="twitter:description" content="Proporcione um evento memorável com nosso serviço de buffet completo e personalizado. Garantimos sofisticação, qualidade e um atendimento premium." />
                <meta name="twitter:image" content="/images/og-image.jpg" /> {/* Use uma imagem de destaque */}
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main>{children}</main>
        </>
    );
}
