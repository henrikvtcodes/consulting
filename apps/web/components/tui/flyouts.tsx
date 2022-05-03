import NextLink from "next/link";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

import classNames from "./classnames";
import { solutions } from "apps/web/utils/config";

const SolutionsFlyout = () => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-900" : "text-gray-500",
              "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent2"
            )}
          >
            <span>Solutions</span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-gray-600" : "text-gray-400",
                "ml-2 h-5 w-5 group-hover:text-gray-500"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                  {solutions.map((item: any) => (
                    <NextLink key={item.name} href={item.href} passHref>
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 group"
                      >
                        {item.icon && (
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-brand-primary text-white sm:h-12 sm:w-12">
                            <item.icon
                              className="h-6 w-6 group-hover:text-brand-accent2h"
                              aria-hidden="true"
                            />
                          </div>
                        )}
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    </NextLink>
                  ))}
                </div>
                <div className="p-5 bg-gray-50 sm:p-8">
                  <NextLink href={"/contact"} passHref>
                    <a
                      href="/contact"
                      className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100"
                    >
                      <div className="flex items-center">
                        <div className="text-base font-medium text-gray-900">
                          Custom Solutions
                        </div>
                        {/* NOTE New Icon
                        <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800">
                          New
                        </span> */}
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        Need help with something specific? Click here to submit
                        an inquiry.
                      </p>
                    </a>
                  </NextLink>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default SolutionsFlyout;
