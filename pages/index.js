import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import NavbarMobile from "../components/navbar/NavbarMobile";
import Hero from "../components/landing/Hero";
import Work from "../components/landing/Work";
import Services from "../components/landing/Services";
import About from "../components/landing/About";
import Contact from "../components/landing/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Luis Kameter</title>
        <link rel="icon" href="/images/favicon.ico" />
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
