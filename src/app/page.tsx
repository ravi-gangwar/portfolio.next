import Header from "@/components/Header";
import Nav from "@/components/Nav";
import HomeScreen from "@/screens/Home";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0F172A] to-black">
    <Head>
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
      <div className="w-full h-full lg:max-w-[40vw] bg-gradient-to-br from-gray-900 to-black p-4 rounded-lg shadow-lg 
                      lg:border lg:border-zinc-700">
        <Header />
        <main className="pt-2 flex-1">
          <HomeScreen />
        </main>
        <Nav />
      </div>
    </div>
  );
}
