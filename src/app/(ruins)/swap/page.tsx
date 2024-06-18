"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from 'next/navigation'
import { BaseModal } from "@/components/BaseModal";
import { BonkRunesIntern } from "@/components/BonkRuins/BonkRunesIntern";
import reload from '@/../public/components/swap/reload.svg';
import slippage from '@/../public/components/swap/slip.svg';
import Image from "next/image";

export default function Bonk() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsOpen(pathname.includes("/bonk-ruins"));
  }, [pathname]);

  const handleClose = () => {
    router.push('/start');
  };

  const renderForm = () => {
    switch (currentStep) {
      case 0:
        return <BonkRunesIntern />;
      default:
        return null;
    }
  };

  return (

    <BaseModal isOpen={true} onClose={handleClose} wSize={533}>
      <article className="p-5">
        <div className="flex justify-between items-center mt-2 ">
          <h3 className="text-2xl font-bold">Swap</h3>
          <div className="flex items-center gap-2">
            <button className="">
              <Image src={reload} width={18} alt="reload" />
            </button>
            <button className="flex items-center rounded-md gap-2 p-1 border border-white">
              <Image src={slippage} alt="Slippage" />
              <span className="text-[10px] leading-3">
                0.1%
              </span>
            </button>
          </div>
        </div>
        <form>
          <div className="flex flex-col mb-4">
            <label htmlFor="from" className="mb-2 font-bold">From</label>
            <div className="relative flex items-center border border-white rounded p-2">
              <div className="flex items-center mr-2">
                <Image src={slippage} alt="Slippage" />
                <span className="ml-2">SOL</span>
              </div>
              <input type="number" name="from" id="from" className="flex-1 bg-transparent outline-none text-right" />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm">Balance: 2.10 SOL</span>
              <div className="flex gap-2 items-center">
                <button type="button" className="px-2 py-1 text-[10px] bg-brown text-white rounded">HALF</button>
                <button type="button" className="px-2 py-1 text-[10px] bg-brown text-white rounded">MAX</button>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="from" className=" font-bold">To</label>
            <div className="relative flex items-center border border-white rounded p-2 mt-2">
              <div className="flex items-center mr-2">
                <Image src={slippage} alt="Slippage" />
                <span className="ml-2">SOL</span>
              </div>
              <input type="number" name="from" id="from" className="flex-1 bg-transparent outline-none text-right" />
            </div>
            <span className="text-sm mt-2">Balance: 2.10 SOL</span>
          </div>
        </form>
      </article>

    </BaseModal>

  );
}