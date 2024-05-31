import { FormImageBg } from "../FormImageBg";
import sword from '@/../public/components/swordsmen.svg';
import wizard from '@/../public/components/wizard.svg';
import archer from '@/../public/components/archer.svg';
import priest from '@/../public/components/priest.svg';
import { useEffect, useState } from "react";
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

  useEffect(() => {
    console.log({
      heroClassAt

    })
  }, [])

  return (
    <form className="flex justify-center flex-col items-center">
      <h2 className="text-2xl text-center">Select your class</h2>
      <div className="w-full my-5 gap-1  lg:gap-8 lg:my-10 grid grid-cols-2 lg:grid-cols-4">
        <button type="button" onClick={() => handleSelectClass("swordsman")}>
          <FormImageBg highlight={selectedClass == 'swordsman'} name={"Swordsman"} image={sword} />
        </button>
        <button type="button"

        // onClick={() => handleSelectClass("wizard")}
        >
          <FormImageBg highlight={selectedClass == 'wizard'} name={"Wizard"} image={wizard} />
        </button>
        <button type="button"

        // onClick={() => handleSelectClass("archer")}
        >
          <FormImageBg highlight={selectedClass == 'archer'} name={"Archer"} image={archer} />
        </button>
        <button type="button"

        // onClick={() => handleSelectClass("priest")}
        >
          <FormImageBg highlight={selectedClass == 'priest'} name={"Priest"} image={priest} />
        </button>
      </div>
      <StepsMint currentStep={2} />
    </form>
  );
}
