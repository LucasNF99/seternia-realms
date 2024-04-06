"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RecoilRoot } from "recoil";

export default function InGameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecoilRoot>
      <div
        className="bg-cover text-white flex flex-col min-h-screen bg-center"
        style={{ backgroundImage: 'url(/components/map-bg.png)' }}>
        <Header />

        <div className="flex-grow">{children}</div>

        <Footer />
      </div>
    </RecoilRoot>
  );
}
