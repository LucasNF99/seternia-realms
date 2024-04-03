import Map from "@/components/Map";
import Image from "next/image";
import Logo from '@/../public/institutional/logo.png';
import ConnectWallet from "@/components/ConnectWallet";

export default function Home() {
  return (
    <main
      className="
        bg-[url('/institutional/bg-lp.png')] 
        bg-cover bg-center min-h-screen flex flex-col justify-center 
        items-center
        gap-20
        pt-24
        px-6
        transition-all
      "
    >
      <Image
        width={400}
        src={Logo}
        alt="Seternia realms"
      />
      <ConnectWallet />
    </main>
  );
}
