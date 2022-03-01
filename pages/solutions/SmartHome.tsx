import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import HomeLayout from "layouts/home";
import Brands from "~components/tui/brands";
import { vendors, namedSolutions } from "~utils/config";

const Page: NextPage = (props) => {
  return (
    <HomeLayout
      title="Smart Home"
      desc="Automate your home or business. Save time and energy instantly."
    >
      <div className=" overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="lg:col-span-1">
              <h2 className="text-base font-semibold text-brand-primary uppercase tracking-wide">
                Henrik VT Consulting
              </h2>

              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                21st Century Living
              </h2>
            </div>
            <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
              {namedSolutions.SmartHome.longFeatures.map((feature) => (
                <div key={feature.feat}>
                  <dt>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-primary text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                      {feature.feat}
                    </p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {feature.desc}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <Brands logos={vendors.Smarthome} />
    </HomeLayout>
  );
};

/**
{namedSolutions.SmartHome.longFeatures.map((feature) => (
                <div key={feature.name}>
                  <dt>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))} 
*/

export default Page;
