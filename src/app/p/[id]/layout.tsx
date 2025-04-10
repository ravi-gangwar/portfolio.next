import Header from "@/components/Header";
import Nav from "@/components/Nav";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Nav />
    </>
  );
}
