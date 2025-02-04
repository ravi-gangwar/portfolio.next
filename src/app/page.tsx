import Header from "@/components/Header";
import Nav from "@/components/Nav";
import HomeScreen from "@/screens/Home";

export default function Home() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex flex-col">
      <div className="flex-1 max-w-[500px] mx-auto w-full h-full">
        <Header />
        <main className="pt-2 flex-1">
          <HomeScreen />
        </main>
        <Nav />
      </div>
    </div>
  );
}
