import { FormImageBg } from "../FormImageBg";
import sword from '@/../public/components/swordsmen.svg';
import wizard from '@/../public/components/wizard.svg';
import archer from '@/../public/components/archer.svg';
import priest from '@/../public/components/priest.svg';
import { useState } from "react";
import { createNftAtom } from "@/presentation/atoms/createNftAtom";
import { useRecoilState } from "recoil";
import StepsMint from "./StepsMint";

export function SelectClass() {
  const [selectedClass, setSelectedClass] = useState<string>();
  const [heroClassAt, setHeroClass] = useRecoilState(createNftAtom);

  const handleSelectClass = (heroClass) => {
    setSelectedClass(heroClass);
    setHeroClass({
      ...heroClassAt,
      class: heroClass,
    })
  };

  return (
    <form className="flex justify-center flex-col items-center">
      <h2 className="text-2xl text-center">Select your class</h2>
      <div className="flex w-full  gap-8 my-10 justify-between">
        <button type="button" onClick={() => handleSelectClass("swordsman")}>
          <FormImageBg highlight={selectedClass == 'swordsman'} name={"Swordsman"} image={sword} cardW="200px" cardH="250px" />
        </button>
        <button type="button"

        // onClick={() => handleSelectClass("wizard")}
        >
          <FormImageBg highlight={selectedClass == 'wizard'} name={"Wizard"} image={wizard} cardW="200px" cardH="250px" />
        </button>
        <button type="button"

        // onClick={() => handleSelectClass("archer")}
        >
          <FormImageBg highlight={selectedClass == 'archer'} name={"Archer"} image={archer} cardW="200px" cardH="250px" />
        </button>
        <button type="button"

        // onClick={() => handleSelectClass("priest")}
        >
          <FormImageBg highlight={selectedClass == 'priest'} name={"Priest"} image={priest} cardW="200px" cardH="250px" />
        </button>
      </div>
      <StepsMint currentStep={2} />
    </form>
  );
}
