import Head from "next/head";


export default function MainLayout({ children }) {
    return (
        <>
            <Head>
                <html lang="pt-br" />
                <title>Tempero da Grazzy</title>
                <meta name="description" content="conteudo" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main>{children}</main>

        </>
    );
}