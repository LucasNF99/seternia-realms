import MintSection from "@/components/MintForms/MintSection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Mint Your Hero'
}
export default function MintPage() {

  return (
    <div className="flex flex-col justify-center items-center">
      <MintSection />
    </div>
  );
}
