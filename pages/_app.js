import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import "../styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
