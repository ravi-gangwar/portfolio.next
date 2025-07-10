import type { Metadata } from "next";
import { Aldrich } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import MenuModal from "@/components/MenuModal";
import Nav from "@/components/Nav";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Ravi Gangwar",
  description: "Ravi Gangwar Portfolio Website",
  metadataBase: new URL("https://ravigangwar.vercel.app"),
};

const aldrich = Aldrich({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <header>
        <meta name="theme-color" content="#0F172A" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="description" content="Ravi Gangwar Portfolio Website" />
        <meta name="author" content="Ravi Gangwar" />
        <meta
          name="keywords"
          content="Ravi Gangwar, Ravi Gangwar Portfolio, Ravi Gangwar Website, Ravi Gangwar Portfolio Website, Ravi Gangwar Resume, Ravi Gangwar Resume Download, Ravi Gangwar Resume PDF, Ravi Gangwar Resume Download PDF, Ravi Gangwar PSIT, Ravi Gangwar Pranveer singh institute of technology kanpur"
        />
        <meta property="og:title" content="Ravi Gangwar Portfolio Website" />
        <meta
          property="og:description"
          content="Ravi Gangwar Portfolio Website"
        />
        <meta property="og:image" content="/opengraph-image.jpeg" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </header>
      <body
        className={`flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0F172A] to-black ${aldrich.className}`}
      >
        <div
          className="w-full h-full lg:max-w-[40vw] bg-gradient-to-br from-gray-900 to-black p-4 rounded-lg shadow-lg 
                        lg:border lg:border-zinc-700"
        >
          <AppProvider>
            <Header />
            {children}
            <Nav />
            <MenuModal />
          </AppProvider>
        </div>
      </body>
      <GoogleAnalytics gaId={process.env.GA_ID || ""} />
    </html>
  );
}
