import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Privacy() {
  return (
    <div>
      <div className="bg-white flex justify-center">
        <div className="max-w-[1300px] w-full">
          <Head>
            <title>Wlokno Merchandise</title>
            <link rel="icon" href="/images/favicon.ico" />
          </Head>
          <Navbar />
          <Footer />
        </div>
      </div>
    </div>
  );
}
