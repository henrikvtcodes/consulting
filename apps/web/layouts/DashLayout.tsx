/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  CurrencyDollarIcon,
  FolderIcon,
  HomeIcon,
  MenuIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Role } from "@prisma/client";

import classNames from "components/classnames";
import { RoleLayout } from "./RoleLayout";
import { useUser } from "utils/hooks/useUser";
import { BadgeCheckIcon, UsersIcon } from "@heroicons/react/solid";

type DashLayoutProps = {
  children?: React.ReactNode;
  roles: Role[];
  nav: typeof clientNav;
};

export const DashLayout = ({ children, nav, roles }: DashLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useSession({
    required: true,
  });

  const { user, updateUser } = useUser();

  const userImage = user?.image;

  const router = useRouter();

  const isCurrent = (href: string) => {
    return router.pathname === href;
  };

  return (
    <RoleLayout roles={roles}>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <Image
                      className="h-8 w-auto sm:h-10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-accent2"
                      src="/henriklogo.png"
                      alt=""
                      width={48}
                      height={48}
                    />
                  </div>
                  <nav className="mt-5 px-2 space-y-1">
                    {nav.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          isCurrent(item.href)
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            isCurrent(item.href)
                              ? "text-gray-300"
                              : "text-gray-400 group-hover:text-gray-300",
                            "mr-4 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="flex-shrink-0 flex flex-col bg-gray-700 p-4">
                  <div className="flex items-center">
                    <div className=" self-start mt-1">
                      {/* eslint-disable-next-line */}
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src={userImage}
                        alt=""
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-white">
                        {user?.name}
                      </p>
                      <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">
                        {user?.email}
                      </p>
                      <button
                        onClick={() => {
                          signOut({
                            callbackUrl: "/auth/sign-in",
                          });
                          updateUser();
                        }}
                        className=" mt-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-primary hover:bg-brand-accent1h"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>

                  {/* ANCHOR */}
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 bg-gray-800">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <Image
                  className="h-8 w-auto sm:h-10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-accent2"
                  src="/henriklogo.png"
                  alt=""
                  width={48}
                  height={48}
                />
                <h1 className="text-white font-semibold text-4xl ml-2">
                  {" "}
                  HVTC{" "}
                </h1>
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {nav.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      isCurrent(item.href)
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        isCurrent(item.href)
                          ? "text-gray-300"
                          : "text-gray-400 group-hover:text-gray-300",
                        "mr-3 flex-shrink-0 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex bg-gray-700 p-4">
              <div className="flex items-center">
                <div className=" self-start mt-1">
                  {/* eslint-disable-next-line */}
                  <img
                    className="inline-block h-9 w-9 rounded-full"
                    src={userImage}
                    alt=""
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">{user?.name}</p>
                  <p className="text-xs font-medium text-gray-300">
                    {user?.email}
                  </p>
                  <button
                    onClick={() => {
                      signOut();
                      router.push("/auth/sign-in");
                      updateUser();
                    }}
                    className=" mt-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-primary hover:bg-brand-accent1h"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 text-brand-text1 bg-gray-50 min-h-screen">
              {children}
            </div>
          </main>
        </div>
      </div>
    </RoleLayout>
  );
};

const clientNav = [
  { name: "Home", href: "/client", icon: HomeIcon, current: true },
  {
    name: "Projects",
    href: "/client/projects",
    icon: FolderIcon,
    current: false,
  },
  {
    name: "Payments",
    href: "/client/payments",
    icon: CurrencyDollarIcon,
    current: false,
  },
  {
    name: "Account",
    href: "/client/account",
    icon: UserIcon,
    current: false,
  },
];

export const ClientDashLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <DashLayout nav={clientNav} roles={[Role.admin, Role.client]}>
      {children}
    </DashLayout>
  );
};

const adminNav = [
  { name: "Home", href: "/admin", icon: HomeIcon, current: true },
  {
    name: "Projects",
    href: "/admin/projects",
    icon: FolderIcon,
    current: false,
  },
  {
    name: "Customers",
    href: "/admin/customers",
    icon: UsersIcon,
    current: false,
  },
  {
    name: "Invites",
    href: "/admin/invites",
    icon: BadgeCheckIcon,
    current: false,
  },
];

export const AdminDashLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <DashLayout nav={adminNav} roles={[Role.admin]}>
      {children}
    </DashLayout>
  );
};
