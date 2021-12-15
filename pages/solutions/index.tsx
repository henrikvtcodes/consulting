import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link';

import HomeLayout from 'layouts/home'
import { DefaultMeta } from '~components/meta'
import { solutions } from '~components/tui/flyouts';

import { CheckIcon } from "@heroicons/react/solid";

const tiers = [
  {
    name: "Wifi Connectivity",
    description: "Get the most out of your internet connection.",
    href: "/solutions/WiFi",
    includedFeatures: [
      "Wide range of options",
      "Own your equipment",
      "Optimized for cost-effectiveness and value",
      "Next generation WiFi 6 solutions available"
    ],
  },
  {
    name: "Networking",
    description: "Connect your property.",
    href: "/solutions/Networking",
    includedFeatures: [
      "High speed",
      "Wired and wireless networking",
      "Connect multiple buildings together",
      "Remote monitoring available"
    ],
  },
  {
    name: "Security & Surveillance",
    description:
      "Keep an eye on what's yours. Privacy first video surveillance.",
    href: "/solutions/Surveillance",
    includedFeatures: [
      "Highly scalable",
      "Footage stored locally or in a private cloud",
      "Privacy first - we don't rely on Amazon or Google",
      "Catch bad actors in high resolution",
    ],
  },
  {
    name: "Smart Home",
    description:
      "Automate your home or business. Save time and energy instantly.",
    href: "/solutions/SmartHome",
    includedFeatures: [
      "Access from anywhere",
      "Smart lighting",
      "Intelligent thermostat & window treatment control",
      "Smart Audio & Video",
    ],
  },
];

const Page:NextPage = (props) => {
  return (
    <HomeLayout>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h1 className="text-5xl font-extrabold text-brand-text sm:text-center">
              Solutions
            </h1>
            <p className="mt-5 text-xl text-gray-500 sm:text-center">
              See what we can offer you.
            </p>
            {/* <div className="relative self-center mt-2 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">
              <button
                type="button"
                className="relative w-1/2 bg-white border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8"
              >
                Monthly billing
              </button>
              <button
                type="button"
                className="ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8"
              >
                Yearly billing
              </button>
            </div> */}
          </div>
          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="border border-gray-200 rounded-lg hover:shadow-md hover:shadow-brand-primary/50 divide-y divide-gray-200"
              >
                <div className="p-6">
                  <h2 className="text-lg leading-6 font-medium text-brand-text1">
                    {tier.name}
                  </h2>
                  <p className="mt-4 text-sm text-gray-500 h-16">
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
                  <NextLink href={tier.href} passHref>
                    <a className="mt-8 block w-full bg-brand-primary rounded-md py-2 text-sm font-semibold text-white text-center hover:shadow-inner">
                      See {tier.name}
                    </a>
                  </NextLink>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                    What we can do
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {tier.includedFeatures.map((feature) => (
                      <li key={feature} className="flex space-x-3">
                        <CheckIcon
                          className="flex-shrink-0 h-5 w-5 text-green-500"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-gray-500">{feature}</span>
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
}

export default Page;