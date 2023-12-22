import Head from "next/head";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import ImprintContent from "../components/ImprintContent";

export default function Imprint() {
  return (
    <div>
      <Head>
        <title>Luis Kameter</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Navbar />
      <NavbarMobile />
      <ImprintContent />
    </div>
  );
}
