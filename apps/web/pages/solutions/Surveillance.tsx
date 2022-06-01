import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import HomeLayout from "layouts/home";
import Brands from "~components/tui/brands";
import { vendors, namedSolutions } from "~utils/config";

const Page: NextPage = (props) => {
  return (
    <HomeLayout
      title="Security &amp; Surveillance"
      desc="Keep an eye on what's yours. Privacy-first video surveillance."
    >
      <div className="relative pt-4 overflow-hidden sm:pt-6 lg:pt-8">
        <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-base font-semibold tracking-wider text-brand-primary uppercase">
              Henrik Van Tassell Consulting
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Security and Surveillance
            </p>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
              Watch over your home or business.
            </p>
          </div>
          <div className="mt-12">
            {" "}
            {/* mt-12 -mb-10 sm:-mb-24 lg:-mb-80 */}
            <Image
              width={1920}
              height={907}
              priority
              className="rounded-lg shadow-2xl"
              src="/liveview.png"
              alt="Networking Dashboard Screenshot"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-12 mb-2 px-4 sm:px-6 lg:px-8">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          {namedSolutions.Surveillance.longFeatures.map((feature) => (
            <div key={feature.feat} className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-primary text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-brand-text1">
                  {feature.feat}
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {feature.desc}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <Brands logos={vendors.Security} />
    </HomeLayout>
  );
};

export default Page;
