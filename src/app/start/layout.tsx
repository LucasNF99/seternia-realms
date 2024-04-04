
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function InGameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/components/map-bg.png)' }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
