import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import "../styles/globals.scss";
import i18n from '../i18n';
import reacti18next from 'react-i18next';
import { useEffect } from "react";

function App({ Component, pageProps }) {
  useEffect(() => {
    i18n.changeLanguage(i18n.language);
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;