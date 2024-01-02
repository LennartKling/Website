import Head from "next/head";
import Navbar from "../../components/navbar/Navbar";
import NavbarMobile from "../../components/navbar/NavbarMobile";
import Work from "../../components/Work";

export default function Friseur() {
  return (
    <div>
      <Head>
        <title>Luis Kameter</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Navbar />
      <NavbarMobile />
      <Work
        title="Friseur Eva Kameter"
        description="ABC"
        img1="work-2-high-res.JPG"
        img2="work-2-high-res-2.JPG"
        link="https://friseurevakameter.de/"
      />
    </div>
  );
}
