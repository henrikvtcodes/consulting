import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Transition } from "@headlessui/react";

import HomeLayout from "layouts/home";
import Brands from "~components/tui/brands";
import { vendors, namedSolutions } from "~utils/config";
import { useState } from "react";

const Page: NextPage = (props) => {
  const [showScroll, setShowScroll] = useState(false);
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

        <div
          onMouseEnter={() => setShowScroll(true)}
          className={"pt-12 sm:pt-16 h-96"}
        >
          <Transition
            show={showScroll}
            enter="transition-opacity duration-750"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className={
                showScroll ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" : "hidden"
              }
            >
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Extremely Flexible
                </h2>
              </div>
            </div>
            <div
              className={
                showScroll ? "mt-10 pb-12 bg-white sm:pb-16" : "hidden"
              }
            >
              <div className="relative">
                <div className="absolute inset-0 h-1/2 " />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto">
                    <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                      <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                          Devices Supported
                        </dt>
                        <dd className="order-1 text-5xl font-extrabold text-brand-primary">
                          1000+
                        </dd>
                      </div>
                      <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                          Operation
                        </dt>
                        <dd className="order-1 text-5xl font-extrabold text-brand-primary">
                          24/7
                        </dd>
                      </div>
                      <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                          Budget
                        </dt>
                        <dd className="order-1 text-5xl font-extrabold text-brand-primary">
                          $-$$$
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
      <Brands logos={vendors.Smarthome} />
    </HomeLayout>
  );
};

export default Page;
