import Header from "@/components/Header";
import MenuModal from "@/components/MenuModal";
import Nav from "@/components/Nav";
import { AppProvider } from "@/context/AppContext";
import HomeScreen from "@/screens/Home";
import Head from "next/head";

export default function Home() {
  return (
    <AppProvider>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0F172A] to-black">
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
        </Head>
        <div
          className="w-full h-full lg:max-w-[40vw] bg-gradient-to-br from-gray-900 to-black p-4 rounded-lg shadow-lg 
                        lg:border lg:border-zinc-700"
        >
          <Header />
          <main className="pt-2 flex-1">
            <HomeScreen />
          </main>
          <Nav />
          <MenuModal />
        </div>
      </div>
    </AppProvider>
  );
}
