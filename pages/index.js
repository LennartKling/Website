import Head from "next/head";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Leam</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Navbar />
      <NavbarMobile />
      <Hero />
      <Work />
      <Services />
      <About />
      <Contact />
    </div>
  );
}
