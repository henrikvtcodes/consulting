import Image from "next/image";
import NextLink from "next/link";
import type { NextPage } from "next";

import { SimpleScale } from './imageScale';

type Logo = {
  alt: string,
  href: string,
  img: string,
  width: number,
}

type BrandComponentProps = {
  logos?: Logo[];
  children?: React.ReactNode;
}

const defaultLogos: Array<Logo> = [
  {
    alt: "Workcation",
    href: "#",
    img: "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
    width: 85.3,
  },
];

const Brands = (props:BrandComponentProps) => { // You'll need this: https://www.omnicalculator.com/other/image-ratio
  let logos = props.logos ? props.logos : defaultLogos

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          We use trusted, reliable hardware and software
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100 hover:bg-gray-200 group">
            <Image
              className="max-h-12 grayscale group-hover:grayscale-0"
              src={logos[0].img}
              alt={logos[0].alt}
              height={48}
              width={logos[0].width}
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100 hover:bg-gray-200 group">
            <Image
              className="max-h-12 grayscale group-hover:grayscale-0"
              src={logos[1].img}
              alt={logos[1].alt}
              height={48}
              width={logos[1].width}
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100 hover:bg-gray-200 group">
            <Image
              className="max-h-12 grayscale group-hover:grayscale-0"
              src={logos[2].img}
              alt={logos[2].alt}
              height={48}
              width={logos[2].width}
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100 hover:bg-gray-200 group">
            <Image
              className="max-h-12 grayscale group-hover:grayscale-0"
              src={logos[3].img}
              alt={logos[3].alt}
              height={48}
              width={logos[3].width}
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100 hover:bg-gray-200 group">
            <Image
              className="max-h-12 grayscale group-hover:grayscale-0"
              src={logos[4].img}
              alt={logos[4].alt}
              height={48}
              width={logos[4].width}
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100 hover:bg-gray-200 group">
            <Image
              className="max-h-12 grayscale group-hover:grayscale-0"
              src={logos[5].img}
              alt={logos[5].alt}
              height={48}
              width={logos[5].width}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;