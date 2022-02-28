import Image from "next/image";
import NextLink from "next/link";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import SolutionsFlyout from "./flyouts";
import solutions from "~utils/config";
import { WarningBanner } from "./warning-banner";

const localSolutions = solutions;

const HeaderM = () => {
  return (
    <Popover className="z-40 relative bg-white">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <NextLink href={"/"} passHref>
            <a>
              <span className="sr-only">Henrik VT Consulting</span>
              <Image
                className="h-8 w-auto sm:h-10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-accent2"
                src="/henriklogo.png"
                alt=""
                width={48}
                height={48}
              />
            </a>
          </NextLink>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-accent2">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden md:flex space-x-10">
          <NextLink href="/about" passHref>
            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
              About Me
            </a>
          </NextLink>

          <NextLink href="/projects" passHref>
            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
              Case Studies
            </a>
          </NextLink>

          <SolutionsFlyout />

          <NextLink href="/faq" passHref>
            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
              FAQ
            </a>
          </NextLink>

          {/* NOTE Add Flyout menu for more options here */}
        </Popover.Group>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <NextLink href={"/auth/sign-in"} prefetch={false} passHref>
            <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </a>
          </NextLink>
          <NextLink href={"/auth/sign-in"} prefetch={false} passHref>
            <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-primary hover:bg-brand-accent1h">
              Sign up
            </a>
          </NextLink>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="h-8 w-auto"
                    src="/henriklogo.png"
                    alt="henrik face logo"
                    height={32}
                    width={32}
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-accent2">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7 ">
                  {localSolutions.solutions.map((solution: any) => (
                    <NextLink key={solution.name} href={solution.href}>
                      <a
                        key={solution.name}
                        href={solution.href}
                        className="group -m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-brand-primary text-white">
                          <solution.icon
                            className="h-6 w-6 group-hover:text-brand-accent2h"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="ml-4 text-base font-medium text-brand-text1">
                          {solution.name}
                        </div>
                      </a>
                    </NextLink>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <NextLink href="/about" passHref>
                  <a className="text-base font-medium text-brand-text1 hover:text-brand-text2">
                    About Me
                  </a>
                </NextLink>

                <NextLink href="/case-studies" passHref>
                  <a
                    href="/case-studies"
                    className="text-base font-medium text-brand-text1 hover:text-brand-text2"
                  >
                    Case Studies
                  </a>
                </NextLink>

                <NextLink href="/contact" passHref>
                  <a className="text-base font-medium text-brand-text1 hover:text-brand-text2">
                    Contact
                  </a>
                </NextLink>
              </div>
              <div className="mt-6">
                {/* <NextLink href="signup" prefetch={false}>
                  <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-primary hover:bg-brand-accent1h">
                    Sign up
                  </a>
                </NextLink> */}
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <NextLink href={"/signin"} prefetch={false}>
                    <a className=" text-brand-primary hover:text-brand-accent1h">
                      Sign in
                    </a>
                  </NextLink>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default HeaderM;
