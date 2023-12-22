import Head from "next/head";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import PrivacyPolicyContent from "../components/PrivacyPolicyContent";

export default function Privacy() {
  return (
    <div>
      <Head>
        <title>Luis Kameter</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Navbar />
      <NavbarMobile />
      <PrivacyPolicyContent />
    </div>
  );
}
