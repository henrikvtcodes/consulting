import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import HomeLayout from "layouts/home";
import Brands from "apps/web/components/tui/brands";
import Features from "apps/web/components/tui/featuresTabs";
import config from "apps/web/utils/config";
import { vendors, namedSolutions } from "apps/web/utils/config";

const Page: NextPage = (props) => {
  return (
    <HomeLayout title="Networking Solutions" desc="Connect your property.">
      <div className="relative pt-4 overflow-hidden sm:pt-6 lg:pt-8">
        <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-base font-semibold tracking-wider text-brand-primary uppercase">
              Henrik Van Tassell Consulting
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Networking Solutions
            </p>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
              Custom networks for your home, property, or small business.
            </p>
          </div>
          <div className="mt-12">
            {" "}
            {/* mt-12 -mb-10 sm:-mb-24 lg:-mb-80 */}
            <Image
              width={1920}
              height={907}
              className="rounded-lg shadow-2xl"
              src="/udmScreenshot-cens.png"
              alt="Networking Dashboard Screenshot"
            />
          </div>
        </div>
      </div>

      <div className="relative bg-white pt-16 sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Built for any situation
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            We are highly flexible and have experience working in many different
            environments.
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {namedSolutions.Networking.longFeatures.map((feature) => (
                <div key={feature.feat} className="pt-6">
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-md bg-brand-primary p-3 shadow-lg">
                          <feature.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight">
                        {feature.feat}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Brands logos={vendors.Networking} />
    </HomeLayout>
  );
};

export default Page;
