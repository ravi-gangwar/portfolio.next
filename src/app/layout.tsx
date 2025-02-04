import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Ravi",
  description: "Ravi gangwar porfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header>
        <meta name="theme-color" content="#0F172A" />
      </header>
      <body
        className={''}
      >
          {children}
      </body>
    </html>
  );
}
