import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import useSWR from "swr";

import classNames from "~components/classnames";
import { UserData } from "types";

export const SelectCustomerList = () => {
  const [selected, setSelected] = useState<UserData>();

  const { data, error } = useSWR<{ users: UserData[] }>(`user/all`);

  return (
    <Listbox value={selected} onChange={setSelected} name="ownerId">
      {({ open }) => (
        <>
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary sm:text-sm">
              <span className="flex items-center">
                {selected ? (
                  <>
                    {/* eslint-disable-next-line */}
                    <img
                      src={selected.image}
                      alt="profile picture"
                      referrerPolicy="no-referrer"
                      className="flex-shrink-0 h-6 w-6 rounded-full"
                    />
                    <span className="ml-3 block truncate">{selected.name}</span>{" "}
                  </>
                ) : (
                  "Select a user"
                )}
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {data?.users?.map((user) => (
                  <Listbox.Option
                    key={user.email}
                    className={({ active }) =>
                      classNames(
                        active
                          ? "text-white bg-brand-primary"
                          : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={user}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          {/* eslint-disable-next-line */}
                          <img
                            src={user.image}
                            alt="profile picture"
                            referrerPolicy="no-referrer"
                            className="flex-shrink-0 h-6 w-6 rounded-full"
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {user.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-brand-primary",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};
