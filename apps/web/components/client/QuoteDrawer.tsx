import { useRouter } from "next/router";
import useSWR from "swr";
import { QuoteData } from "types";
import { HTTPError } from "ky";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

import { QuoteCard } from "./Quote";

type DrawerProps = {
  projectId: string;
};

const Divider = (props: { text: string }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="px-3 bg-gray-100 text-lg font-medium text-gray-900">
          Quote
        </span>
      </div>
    </div>
  );
};

export const QuoteDrawer = (props: DrawerProps) => {
  const router = useRouter();
  const { quoteId } = router.query;

  const { data: quote, error } = useSWR<QuoteData, HTTPError>(
    !!router.query.quoteId ? `quote/${quoteId}` : null
  );

  return (
    <Transition.Root show={!!router.query.quoteId} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => router.push(`/client/projects/${props.projectId}`)}
      >
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-xl">
                  <div className="flex h-full flex-col overflow-y-scroll bg-gray-100 py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          {" "}
                          View{" "}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-gray-100 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                            onClick={() =>
                              router.push(`/client/projects/${props.projectId}`)
                            }
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <Divider text="Quote" />
                      <QuoteCard quote={quote} />

                      {quote?.invoice && <Divider text="Invoice" />}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
