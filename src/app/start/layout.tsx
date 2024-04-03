import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function InGameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-[url('/components/map-bg.png')] 
        bg-cover bg-center min-h-screen flex flex-col justify-between 
        items-center w-full px-20 py-8">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
