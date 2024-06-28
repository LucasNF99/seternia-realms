"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { QuickSelectModal } from "@/components/QuickSelectModal";
import { RecoilRoot } from "recoil";
export default function InRuinsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <RecoilRoot>
      <div
        className="bg-cover text-white items-center justify-center flex flex-col min-h-screen bg-center"
        style={{
          backgroundImage: 'url(/maps/bg-town.png)'
        }}>
        <Header />
        <div className="flex-grow justify-center flex items-center">{children}</div>
        <Footer />
      </div>
      <QuickSelectModal />
    </RecoilRoot>
  );
}
