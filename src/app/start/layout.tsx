"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";

export default function InGameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const shouldChangeBackground = pathname.includes("/start/training");

  return (
    <RecoilRoot>
      <div
        className="bg-cover text-white flex flex-col min-h-screen bg-center"
        style={{
          backgroundImage: shouldChangeBackground
            ? 'url(/components/training.jpg)'
            : 'url(/components/map-bg.png)'
        }}>
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
    </RecoilRoot>
  );
}
