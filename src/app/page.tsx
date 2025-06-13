import Header from "@/components/Header";
import HomeScreen from "@/screens/Home";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0F172A] to-black">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <div className="w-full">
        <Header />
        <main className="pt-2 flex-1">
          <HomeScreen />
        </main>
      </div>
    </div>
  );
}
