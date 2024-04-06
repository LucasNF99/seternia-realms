import { FormImageBg } from "../FormImageBg";
import { useState } from "react";
import { createNftAtom } from "@/presentation/atoms/createNftAtom";
import { useRecoilState } from "recoil";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import flame from '@/../public/components/flameFac.svg';
import twilight from '@/../public/components/twilightFac.svg';
import arcane from '@/../public/components/arcaneFac.svg';
import light from '@/../public/components/lightFac.svg';
import StepsMint from "./StepsMint";

export function SelectFaction() {
  const [selectedFaction, setSelectedFaction] = useState<string>();
  const [heroRace, setHeroFaction] = useRecoilState(createNftAtom);

  const handleSelectFac = (herofaction) => {
    setSelectedFaction(herofaction);
    setHeroFaction({
      ...heroRace,
      faction: herofaction
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (heroRace.genre == undefined || heroRace.class == undefined || heroRace.race == undefined || heroRace.faction == undefined) {
      console.error('Select all of the previews options')
    } else {
      console.log(heroRace)
    }
  }

  return (
    <form className="flex justify-center flex-col items-center" onSubmit={handleSubmit}>
      <h2 className="text-2xl text-center">Select your faction</h2>
      <div className="flex w-full  gap-8 my-10 justify-between">
        <button type="button" onClick={() => handleSelectFac("flame")}>
          <FormImageBg highlight={selectedFaction == 'flame'} name={"Silver Flame"} image={flame} cardW="200px" cardH="250px" />
        </button>
        <button type="button" onClick={() => handleSelectFac("light")}>
          <FormImageBg highlight={selectedFaction == 'light'} name={"Order of Light"} image={light} cardW="200px" cardH="250px" />
        </button>
        <button type="button" onClick={() => handleSelectFac("arcane")}>
          <FormImageBg highlight={selectedFaction == 'arcane'} name={"Arcane Circle"} image={arcane} cardW="200px" cardH="250px" />
        </button>
        <button type="button" onClick={() => handleSelectFac("twilight")}>
          <FormImageBg highlight={selectedFaction == 'twilight'} name={"Twilight Brotherhood"} image={twilight} cardW="200px" cardH="250px" />
        </button>
      </div>
      <StepsMint currentStep={4} />
      <div className="flex justify-center gap-4 mt-8">
        <button type="submit" className="p-4 w-56 gap-2 justify-center border-2 silver rounded-lg bg-main flex items-center">
          Mint your hero
        </button>
      </div>
    </form>
  );
}