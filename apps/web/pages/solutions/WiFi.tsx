import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import HomeLayout from "layouts/PublicPage";
import Brands from "~components/marketing/brands";
import { vendors, namedSolutions } from "utils/config";

const Page: NextPage = (props) => {
  return (
    <HomeLayout
      title="Wifi Solutions"
      desc="Get the most out of your internet connection."
    >
      <div className="py-12 mb-2 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-brand-primary font-semibold tracking-wide uppercase">
              Henrik Van Tassell Consulting
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-text1 sm:text-4xl">
              WiFi Networking Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              The difference between our WiFi solutions and others.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {namedSolutions.WiFi.longFeatures.map((feature) => (
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
        </div>
      </div>
      <Brands logos={vendors.WiFi} />
    </HomeLayout>
  );
};

export default Page;
