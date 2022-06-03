import type { NextPage } from "next";
import NextLink from "next/link";

import HomeLayout from "layouts/PublicPage";
import { solutions, allSolutions } from "utils/config";

import { CheckIcon } from "@heroicons/react/solid";

const Page: NextPage = (props) => {
  return (
    <HomeLayout title="Solutions" desc="See what we can offer you.">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h1 className="text-5xl font-extrabold text-brand-text sm:text-center">
              Solutions
            </h1>
            <p className="mt-5 text-xl text-gray-500 sm:text-center">
              See what I can offer you.
            </p>
            <div className="bg-white">
              <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                <div>
                  <h2 className="text-base font-semibold text-brand-accent1h uppercase tracking-wide">
                    Standards
                  </h2>
                  <p className="mt-2 text-3xl font-extrabold text-gray-900">
                    All Solutions
                  </p>
                  <p className="mt-4 text-lg text-gray-500">
                    Every project completed by Henrik Van Tassell Consulting is
                    carefully crafted.
                  </p>
                </div>
                <div className="mt-12 lg:mt-0 lg:col-span-2">
                  <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
                    {allSolutions.map((feature) => (
                      <div key={feature.name} className="relative">
                        <dt>
                          <CheckIcon
                            className="absolute h-6 w-6 text-green-500"
                            aria-hidden="true"
                          />
                          <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                            {feature.name}
                          </p>
                        </dt>
                        <dd className="mt-2 ml-9 text-base text-gray-500">
                          {feature.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
            {solutions.map((tier) => (
              <div
                key={tier.name}
                className="border border-gray-200 rounded-lg hover:shadow-md hover:shadow-brand-primary/50 divide-y divide-gray-200"
              >
                <div className="p-6">
                  <h2 className="text-lg leading-6 font-medium text-brand-text1">
                    {tier.name}
                  </h2>
                  <p className="mt-4 text-sm text-gray-500 md:h-16">
                    {tier.description}
                  </p>
                  {/* <p className="mt-8">
                    <span className="text-4xl font-extrabold text-gray-900">
                      ${tier.priceMonthly}
                    </span>{" "}
                    <span className="text-base font-medium text-gray-500">
                      /mo
                    </span>
                  </p> */}
                  <NextLink
                    href={`${tier.href}?utm_campaign=card&utm_source=site`}
                    passHref
                  >
                    <a className="mt-8 block w-full bg-brand-primary rounded-md py-2 text-sm font-semibold text-white text-center hover:shadow-inner">
                      See {tier.name}
                    </a>
                  </NextLink>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                    What I can do
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {tier.shortFeatures.map((feature) => (
                      <li key={feature.feat} className="flex space-x-3">
                        <CheckIcon
                          className="flex-shrink-0 h-5 w-5 text-green-500"
                          aria-hidden="true"
                        />
                        {feature.tip ? (
                          <span className="text-sm text-gray-500 relative">
                            {feature.feat}
                            <span className="hidden group-hover:visible">
                              {" "}
                              {feature.tip}
                            </span>
                          </span>
                        ) : (
                          <span className="text-sm text-gray-500">
                            {feature.feat}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Page;
