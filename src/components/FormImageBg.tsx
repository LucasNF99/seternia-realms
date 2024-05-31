import classNames from "classnames";
import Image, { StaticImageData } from "next/image";

type IFormImageBgProps = {
  name: string;
  image: StaticImageData;
  highlight?: boolean;
  imageW?: number;
  imageH?: number;
  coin?: 'sol' | 'jup' | 'bonk'
};

export function FormImageBg(
  {
    name,
    image,
    highlight,
    imageH,
    imageW,
    coin
  }:
    IFormImageBgProps
) {
  return (
    <div>
      <article className={classNames(`bg-tertiary lg:w-[200px] h-[250px] transition-all p-6 flex justify-center items-center rounded-lg hover:scale-105 hover:outline outline-yell`, highlight ? 'scale-105 outline outline-yell' : '')}>

        <Image src={image} alt={name} width={imageW} height={imageH} />

      </article>
      <p className="mt-2 text-center">
        {name}
      </p>
    </div>
  );
}
