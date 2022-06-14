import type { NextPage } from "next";
import Image from "next/image";
import NextLink from "next/link";
// import { serialize } from "next-mdx-remote/serialize";
// import { MDXRemote } from "next-mdx-remote";

import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

import HomeLayout from "layouts/PublicPage";
import classNames from "components/classnames";
import { faqs } from "utils/config";
import { markdownToHtmlSync } from "utils/markdownToHtml";
import markdownStyles from "~styles/faq.module.css";

type PageProps = {
  children?: React.ReactNode;
  faqItems: Array<{
    question: string;
    answer: string;
  }>;
};

const Page = ({ faqItems }: PageProps) => {
  return (
    <HomeLayout title="FAQs" desc="Frequently Asked Questions">
      <div className="">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {faqItems.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-medium text-gray-900">
                            {faq.question}
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                            <ChevronDownIcon
                              className={classNames(
                                open ? "-rotate-180" : "rotate-0",
                                "h-6 w-6 transform"
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base text-gray-500">
                          <div
                            className={markdownStyles["markdown"]}
                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                          />
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export const getStaticProps = () => {
  let faqItems = faqs;

  faqItems.map((faq) => {
    faq.answer = markdownToHtmlSync(faq.answer || "");
  });

  return {
    props: {
      faqItems,
    },
  };
};

export default Page;
