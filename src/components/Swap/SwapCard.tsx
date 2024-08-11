"use client";
import { useState } from "react";
import { usePathname, useRouter } from 'next/navigation'
import Image from "next/image";
import { BaseModal } from "@/components/BaseModal";
import reload from '@/../public/components/swap/reload.svg';
import slippage from '@/../public/components/swap/slip.svg';
import solIcon from '@/../public/components/sol-icon.svg';
import bonkIcon from '@/../public/components/bonk-icon.svg';
import swapIcon from '@/../public/components/swap-icon.svg';


export default function SwapCard() {
  const [isInverted, setIsInverted] = useState(false);

  const handleClick = () => {
    setIsInverted(!isInverted);
  };

  const router = useRouter();
  const handleClose = () => {
    router.push('/start');
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
        <form className="flex flex-col justify-center  w-full">
          <div className="flex flex-col ">
            <label htmlFor="from" className="mb-2 font-bold">From</label>
            <div className="relative flex items-center border border-white rounded p-2">
              <div className="flex items-center mr-2">
                <Image src={solIcon} alt="Slippage" />
                <span className="ml-2">SOL</span>
              </div>
              <input type="number" placeholder="0.00" name="from" id="from" className="flex-1 bg-transparent outline-none text-right text-white" />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm">Balance: 2.10 SOL</span>
              <div className="flex gap-2 items-center">
                <button type="button" className="px-2 py-1 text-[10px] bg-brown text-white rounded hover:scale-95 transition-all">HALF</button>
                <button type="button" className="px-2 py-1 text-[10px] bg-brown text-white rounded hover:scale-95 transition-all">MAX</button>
              </div>
            </div>
          </div>


          <button
            type="button"
            className="w-full flex justify-center items-center "
            onClick={handleClick}
          >
            <div className={` transform transition-transform duration-500 ${isInverted ? 'scale-y-[-1]' : ''}`}>
              <Image src={swapIcon} alt="swap" width={24} />
            </div>
          </button>


          <div className="-mt-4">
            <label htmlFor="from" className="font-bold">To</label>
            <div className="relative flex items-center border border-white rounded p-2 mt-2">
              <div className="flex items-center mr-2">
                <Image src={bonkIcon} alt="Slippage" />
                <span className="ml-2">BONK</span>
              </div>
              <input type="number" placeholder="0.00" name="from" id="from" className="flex-1 bg-transparent outline-none text-right text-white" />
            </div>
            <span className="text-sm mt-2">Balance: 2000.10 BONK</span>
          </div>
          <button className="w-full transition-all hover:scale-105 mt-5  font-bold mx-auto max-w-[277px] py-4 bg-brown border-gradient rounded-md">Swap</button>
          <div className="flex flex-col gap-1 mt-4">
            <span className="text-xs">Price: </span>
            <span className="text-xs">Minimum Received: </span>
            <span className="text-xs">Price Impact: </span>
          </div>
        </form>
      </article>

    </BaseModal>
  )
}