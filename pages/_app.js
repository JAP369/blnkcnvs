import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { motion, useViewportScroll } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const { scrollYProgress } = useViewportScroll();

  return (
    <>
      <Navbar />
      <motion.path
        d='M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0'
        style={{ pathLength: scrollYProgress }}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
