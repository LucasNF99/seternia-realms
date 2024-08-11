
import map from "@/../public/maps/bg-main.png";
import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: 'Start'
}
export default function Map() {
  return (
    <div className="relative w-full h-[680px]">
      <Image
        src={map}
        alt={"map"}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
    </div>
  );
}
