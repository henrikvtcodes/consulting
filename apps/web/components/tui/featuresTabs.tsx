import Image from "next/image";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";

import classNames from "./classnames";
import config from "utils/config";
import Post from "components/post";

type FeatureProps = {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

type TabProps = {
  name: string;
  features: FeatureProps[];
};

type ComponentProps = {
  tabs: Array<TabProps>;
};

const Features = (props: ComponentProps) => {
  return (
    <div className="bg-white">
      <section
        aria-labelledby="features-heading"
        className="max-w-7xl mx-auto py-32 sm:px-2 lg:px-8"
      >
        <div className="max-w-2xl mx-auto px-4 lg:px-0 lg:max-w-none">
          <div className="max-w-3xl">
            <h2
              id="features-heading"
              className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            >
              Specifications
            </h2>
            <p className="mt-4 text-gray-500">See how our solutions work.</p>
          </div>

          <Tab.Group as="div" className="mt-4">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto px-4 border-b border-gray-200 sm:px-0">
                <Tab.List className="-mb-px flex space-x-10">
                  {props.tabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? "border-brand-accent1 text-brand-accent1h"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                          "whitespace-nowrap py-6 border-b-2 font-medium text-sm"
                        )
                      }
                    >
                      {tab.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>

            <Tab.Panels as={Fragment}>
              {props.tabs.map((tab) => (
                <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                  {tab.features.map((feature) => (
                    <div
                      key={feature.name}
                      className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8"
                    >
                      <div className="mt-6 lg:mt-0 lg:col-span-5">
                        <h3 className="text-lg font-medium text-gray-900">
                          {feature.name}
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                          {feature.description}
                        </p>
                      </div>
                      <div className="lg:col-span-7">
                        <div className="aspect-w-2 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden sm:aspect-w-5 sm:aspect-h-2">
                          <Image
                            src={feature.imageSrc}
                            alt={feature.imageAlt}
                            className="object-center object-cover"
                            width={586}
                            height={293}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
};

export default Features;
