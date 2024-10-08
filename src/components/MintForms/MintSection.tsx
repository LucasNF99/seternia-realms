"use client";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from 'next/navigation'
import { BaseModal } from "@/components/BaseModal";
import { SelectGenre } from "@/components/MintForms/SelectGenre";
import { SelectClass } from "@/components/MintForms/SelectClass";
import { SelectRace } from "@/components/MintForms/SelectRace";
import { SelectFaction } from "@/components/MintForms/SelectFaction";
import { createNftAtom } from "@/presentation/atoms/createNftAtom";
import { useRecoilState } from "recoil";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import BN from "bn.js";
import { MintTx } from "@/contract/transaction";

export default function MintSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [formInfo, setFormInfo] = useRecoilState(createNftAtom);
  const [currentStep, setCurrentStep] = useState(0);

  const wallet = useAnchorWallet()
  const { connection } = useConnection()

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsOpen(pathname.includes("/altar"));
  }, [pathname]);

  const handleClose = () => {
    router.push('/start');
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderForm = () => {
    switch (currentStep) {
      case 0:
        return <SelectRace />;
      case 1:
        return <SelectClass />;
      case 2:
        return <SelectFaction />;
      default:
        return null;
    }
  };
  const handleMint = async () => {
    if (formInfo.class == undefined || formInfo.race == undefined || formInfo.faction == undefined) {
      console.error('Select all of the previews options')
    } else {
      //try {
      const tx = await MintTx(
        wallet,
        connection,
        false,
        new BN(1),
        new BN(1),
        new BN(1),
        new BN(1)
      );
      if (tx) {
        handleClose()
      } else {
        alert("Error in Mint NFT trasnaction")
      }
      /*} catch (error) {
        console.log("Input incorrect")
      }*/
      console.log(formInfo)
    }
  }

  return (

    <BaseModal wSize={930} wHeight={600} isOpen={isOpen} onClose={handleClose}>
      {renderForm()}
      <div className="flex justify-center gap-6 mt-4">
        {currentStep > 0 && (
          <>
            <button className="p-4 border-gradient w-56 gap-2 justify-center border-2 silver rounded-lg bg-brown flex items-center" onClick={handlePrev}><ArrowLeftIcon width={20} />Previous</button>
            {currentStep == 2 && (
              <button type="button" onClick={handleMint} className="p-4 w-56 border-gradient gap-2 justify-center border-2 silver rounded-lg bg-brown flex items-center">
                Mint your hero
              </button>
            )}
          </>
        )}
        {currentStep < 2 && (
          <button className="p-4 w-56 gap-2 justify-center border-2 silver rounded-lg bg-brown border-gradient flex items-center" onClick={handleNext}>Next <ArrowRightIcon width={20} /></button>
        )}
      </div>
    </BaseModal>
  );
}
