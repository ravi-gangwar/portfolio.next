import type { Metadata } from "next";
import { Aldrich } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ravi",
  description: "Ravi Gangwar Portfolio Website",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </header>
      <body
        className={`flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0F172A] to-black ${aldrich.className}`}
      >
        {children}
      </body>
    </html>
  );
}
