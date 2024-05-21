import Head from "next/head";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-white flex justify-center">
      <div className="max-w-[1300px] w-full">
        <Head>
          <title>Wlokno Merchandise</title>
          <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <Navbar />
        <Hero />
        <Info />
      </div>
    </div>
  );
}
