import { Html, Head, Main, NextScript } from "next/document";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
