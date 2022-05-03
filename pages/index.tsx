import type { NextPage } from "next";
import Image from "next/image";
import NextLink from "next/link";

import HomeLayout from "layouts/home";
import { DefaultMeta } from "~components/meta";

const Home: NextPage = (props) => {
  return (
    <HomeLayout>
      <DefaultMeta />
      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 " />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
              <div className="relative shadow-2xl md:shadow-brand-primary sm:rounded-2xl sm:overflow-hidden ">
                <div className="absolute inset-0">
                  <Image
                    className="h-full w-full object-cover"
                    src="/milfordsunrise.JPG"
                    alt="Foggy sunrise"
                    layout="fill"
                    priority
                  />
                  <div className="absolute inset-0 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-brand-text1">
                      Technology Solutions
                    </span>
                    <span className="block text-brand-text1 sm:text-4xl lg:text-5xl rounded-xl">
                      for residential and small business
                    </span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-blue-prussian sm:max-w-3xl">
                    Serving Pike County, Pennsylvania and Hudson County, New
                    Jersey since 2019
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                      <NextLink
                        href={"/solutions?utm_campaign=hero&utm_source=site"}
                        passHref
                      >
                        <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-brand-accent1 bg-white hover:bg-indigo-50 sm:px-8">
                          Solutions
                        </a>
                      </NextLink>
                      <NextLink
                        href={"/projects?utm_campaign=hero&utm_source=site"}
                        passHref
                      >
                        <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-accent1 bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                          Case Studies
                        </a>
                      </NextLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </HomeLayout>
  );
};

export default Home;
