import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import NavbarMobile from "../components/navbar/NavbarMobile";
import PrivacyPolicyContent from "../components/legal/PrivacyPolicyContent";

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
