import classNames from "classnames";
import Image, { StaticImageData } from "next/image";

type IFormImageBgProps = {
  name: string;
  image: StaticImageData;
  cardW?: string;
  cardH?: string;
  highlight?: boolean;
};

export function FormImageBg(
  {
    name,
    image,
    cardW,
    cardH,
    highlight
  }:
    IFormImageBgProps
) {
  return (
    <div>
      <article style={{ width: cardW, height: cardH }} className={classNames(`bg-[#DEC58D] transition-all p-6 flex justify-center items-center rounded-lg hover:scale-105 hover:outline outline-amber-700`, highlight ? 'scale-105 outline outline-amber-700' : '')}>

        <Image src={image} alt={name} />

      </article>
      <p className="mt-2 text-center">
        {name}
      </p>
    </div>
  );
}
