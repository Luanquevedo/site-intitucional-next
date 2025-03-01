import '../styles/globals.scss'
import '../styles/_variables.scss'
import '../components/aboutus/index.scss'
import '../components/contact/index.scss'
import '../components/footer/index.scss'
import '../components/galery/index.scss'
import '../components/works/index.scss'
import '../components/hero/index.scss'
import '../components/nav/index.scss'
import '../components/mensage/index.scss'

import Navbar from '../components/nav/navbar'
import Footer from '../components/footer/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar /> {/* Adicionando o Navbar */}
      <main>
        <Component {...pageProps} /> {/* O conteúdo principal da página */}
      </main>
      <Footer /> {/* Adicionando o Footer */}
    </>
  );
}

export default MyApp;
