import '../styles/globals.css';
import Footer from '../components/footer/Footer';
import Nav2 from '../components/Nav/Nav2';
import '../components/Nav/nav2.css';
import '../components/Homepage/banking-tools.css';
import '../components/Homepage/banner.css';
import '../components/Homepage/solutions.css';
import '../components/footer/footer.css';
import '../components/Homepage/blog.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav2 />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;