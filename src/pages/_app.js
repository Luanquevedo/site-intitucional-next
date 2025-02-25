import '../styles/globals.scss'
import '../styles/_variables.scss'
import '../components/aboutus/banner.module.scss'
import '../components/aboutus/container.module.scss'
import '../components/contact/contact.module.scss'
import '../components/footer/footer.module.scss'
import '../components/galery/card.module.scss'
import '../components/hero/banner.module.scss'
import '../components/hero/container.module.scss'
import '../components/nav/navbar.module.scss'

function MyApp({ Component, pageProps }) {
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }
  
  export default MyApp;