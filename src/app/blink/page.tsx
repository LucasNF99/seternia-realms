"use client";
import { useAnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";

import { useRouter } from 'next/navigation'
import rune from '@/../public/components/rune.gif';
import mint from '@/../public/components/buttons/mint-button.svg';
import Image from "next/image";


export default function QuickSelect() {
  const router = useRouter();
  const wallet = useAnchorWallet()
  const { connection } = useConnection()
  const { publicKey } = useWallet()


  return (
    <div className="flex items-center flex-col justify-center">
      <button onClick={() => console.log('teste')} type="button">
        <Image className="" alt="Mint Hero" src={mint} />
      </button>
      <Image className=" rounded-lg mb-2 " width={350} src={rune} alt="Rune" />
    </div>
  );
}
