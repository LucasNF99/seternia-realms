"use client";
import { useAnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import { SMintTx } from "../../../contract/transaction";
import { useRouter } from 'next/navigation'
import rune from '@/../public/components/rune.gif';
import Image from "next/image";

export default function QuickSelect() {
  const router = useRouter();
  const wallet = useAnchorWallet()
  const { connection } = useConnection()
  const { publicKey } = useWallet()

  const simple_mint = async () => {
    console.log(publicKey)
    try {
      const tx = await SMintTx(
        wallet,
        connection,
      );
      if (tx) {
        router.push('/mint/altar')
      } else {
        alert("Error in Mint NFT trasnaction")
      }
    } catch (error) {
      console.log("Input incorrect")
    }
  }
  return (
    <div>
      <Image className=" rounded-lg mb-2 mx-auto" width={350} src={rune} alt="Rune" />
      <button onClick={simple_mint} className="p-4 border-gradient mx-auto transition-all my-4 hover:scale-105 w-56 gap-2 justify-center border-2 silver rounded-lg bg-tertiary flex items-center">
        Mint
      </button>
    </div>
  );
}
