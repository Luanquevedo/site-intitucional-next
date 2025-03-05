import Head from "next/head";

export default function MainLayout({ children }) {
    return (
        <>
            <Head>
                <html lang="pt-br" />
                <title>Cuka Eventos - Buffet Personalizado e Eventos</title>
                <meta name="description" content="No Cuka Eventos, oferecemos um serviço de buffet personalizado e completo para eventos especiais, como bodas, noivados e jantares familiares. Faça seu evento inesquecível!" />
                <meta name="keywords" content="buffet personalizado, eventos, noivados, bodas, jantares, almoços familiares, serviço completo, eventos especiais, buffet sofisticado, buffet gourmet" />
                <meta property="og:title" content="Cuka Eventos - Buffet Personalizado para Seu Evento" />
                <meta property="og:description" content="Proporcione um evento memorável com nosso serviço de buffet completo e personalizado. Garantimos sofisticação, qualidade e um atendimento premium. Celebre com o Cuka Eventos!" />
                <meta property="og:image" content="/images/og-image.jpg" />
                <meta property="og:url" content="https://www.cukaeventos.com.br" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Cuka Eventos" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Cuka Eventos - Buffet Personalizado e Eventos" />
                <meta name="twitter:description" content="Proporcione um evento memorável com nosso serviço de buffet completo e personalizado. Garantimos sofisticação, qualidade e um atendimento premium." />
                <meta name="twitter:image" content="/images/og-image.jpg" />
                <meta name="twitter:site" content="@cukaeventos" /> {/* Supondo que tenha uma conta no Twitter */}
                <meta name="robots" content="index, follow" /> {/* Instruções para os motores de busca */}
                <link rel="icon" href="/favicon.png" />
                <link rel="stylesheet" href="/styles/main.css" /> {/* Adicionando uma folha de estilos personalizada */}
                <link rel="canonical" href="https://www.cukaeventos.com.br" /> {/* URL canônica para SEO */}
            </Head>
            <main>{children}</main>
        </>
    );
}
