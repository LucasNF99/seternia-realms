"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { QuickSelectModal } from "@/components/QuickSelectModal";
import { usePathname, useRouter } from "next/navigation";
import { RecoilRoot } from "recoil";
export default function InRuinsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // export const metadata: Metadata = {
  //   title: "Seternia realms",
  //   description: "Generated by create next app",
  // };
  const pathname = usePathname();
  const shouldChangeBackground = pathname.includes("/start/training");
  const runeBg = pathname.includes("/mint/mint-rune");
  const altar = pathname.includes("/mint/altar");

  return (
    <RecoilRoot>
      <div
        className="bg-cover text-white flex items-center flex-col min-h-screen bg-center"
        style={{
          backgroundImage: shouldChangeBackground
            ? 'url(/components/training_img.jpg)'
            : (runeBg ? 'url(/maps/altar-bg.png)' : (altar ? 'url(/maps/altar-bg.png)' : 'url(/components/map-bg.png)'))
        }}>
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
      <QuickSelectModal />
    </RecoilRoot>
  );
}