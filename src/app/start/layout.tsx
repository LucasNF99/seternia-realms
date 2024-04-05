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
    <div
      className="bg-cover flex flex-col min-h-screen bg-center"
      style={{ backgroundImage: 'url(/components/map-bg.png)' }}>
      <Header />
      <RecoilRoot>
        <div className="flex-grow">{children}</div>
      </RecoilRoot>
      <Footer />
    </div>
  );
}
