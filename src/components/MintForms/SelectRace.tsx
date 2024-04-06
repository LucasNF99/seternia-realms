import { FormImageBg } from "../FormImageBg";
import { useState } from "react";
import { createNftAtom } from "@/presentation/atoms/createNftAtom";
import { useRecoilState } from "recoil";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import human from '@/../public/components/humanRace.svg';
import bonk from '@/../public/components/bonkRace.svg';
import StepsMint from "./StepsMint";

export function SelectRace() {
  const [selectedRace, setSelectedRace] = useState<string>();
  const [heroRaceAtom, setHeroRace] = useRecoilState(createNftAtom);

  const handleSelectRace = (heroRace) => {
    setSelectedRace(heroRace);
    setHeroRace({
      ...heroRaceAtom,
      race: heroRace,
    })

  };

  return (
    <form className="flex justify-center flex-col items-center">
      <h2 className="text-2xl text-center">Select your race</h2>
      <div className="flex w-full  gap-8 my-10 justify-between">
        <button type="button" onClick={() => handleSelectRace("human")}>
          <FormImageBg highlight={selectedRace == 'human'} name={"Human"} image={human} cardW="200px" cardH="250px" />
        </button>
        <button type="button"

        // onClick={() => handleSelectRace("cat")}
        >
          <FormImageBg highlight={selectedRace == 'cat'} name={"Cat"} image={bonk} cardW="200px" cardH="250px" />
        </button>
        <button type="button"

        // onClick={() => handleSelectRace("pepe")}
        >
          <FormImageBg highlight={selectedRace == 'pepe'} name={"Pepe"} image={bonk} cardW="200px" cardH="250px" />
        </button>
        <button type="button"

        // onClick={() => handleSelectRace("bonk")}
        >
          <FormImageBg highlight={selectedRace == 'bonk'} name={"Bonk"} image={bonk} cardW="200px" cardH="250px" />
        </button>
      </div>
      <StepsMint currentStep={3} />
    </form>
  );
}
