import Head from "next/head";
import Navbar from "../../components/navbar/Navbar";
import NavbarMobile from "../../components/navbar/NavbarMobile";
import Work from "../../components/Work";

export default function Leam() {
  return (
    <div>
      <Head>
        <title>Luis Kameter</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Navbar />
      <NavbarMobile />
      <Work
        title="Leam Technologies"
        description="ABC"
        img1="work-1-high-res.JPG"
        img2="work-1-high-res-2.JPG"
        link="https://leam.tech/"
      />
    </div>
  );
}
