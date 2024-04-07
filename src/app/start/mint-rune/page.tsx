"use client";
import { BaseModal } from "@/components/BaseModal";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from 'next/navigation'
import rune from '@/../public/components/rune.gif';
import Image from "next/image";

export default function QuickSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname.includes("/mint-rune")) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [pathname]);

  function handleClose(): void {
    router.push('/start')
  }

  return (
    <div className="lg:px-40">
      <BaseModal bgColor="bg-[#0C2E44]" size="small" isOpen={isOpen} onClose={handleClose}>
        <div className="flex flex-col items-center">
          <h2 className="text-center  text-3xl mb-2">Mint your Rune</h2>
          <Image className=" rounded-lg mb-2" width={350} src={rune} alt="Rune" />
        </div>
      </BaseModal>
      <button onClick={() => router.push('/start/altar')} className="p-4 mx-auto transition-all my-4 hover:scale-105 w-56 gap-2 justify-center border-2 silver rounded-lg bg-main flex items-center">
        Mint
      </button>
    </div>
  );
}
