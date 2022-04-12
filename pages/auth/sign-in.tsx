import { LockClosedIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { getCsrfToken, getProviders } from "next-auth/react";
import {
  ExclamationIcon,
  BellIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/solid";
import { useSession, signOut } from "next-auth/react";
import NextLink from "next/link";

import FormPageLayout from "layouts/formPage";
import FormWindow from "~components/forms/window";
import SignInForm from "~components/forms/signIn";
import { NextAuthErrorParams } from "utils/config";
import { useRole } from "~utils/hooks/useRole";
import { useUser } from "~utils/hooks/useUser";

const Page = ({ csrfToken }: { csrfToken: string }) => {
  const router = useRouter();

  const { error } = router.query;

  let errorType = "Default";
  let errorInfo = NextAuthErrorParams.Default;

  if (typeof error === "string") {
    errorType = error;
    if (NextAuthErrorParams[error]) {
      errorInfo = NextAuthErrorParams[error];
    }
  }

  const { role, isLoading, mutate } = useRole();

  const { user, status, signOut: mutUserData } = useUser();

  const isLoggedIn = user as boolean;

  return (
    <FormPageLayout>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="my-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <FormWindow>
        {isLoggedIn ? (
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="flex items-center">
              <div>
                {/* eslint-disable-next-line */}
                <img
                  className="inline-block h-9 w-9 rounded-full"
                  src={user.image}
                  alt="Profile Image"
                />
              </div>
              <div className="ml-3">
                <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                  {user.name}
                </p>
                <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                  {user.email}
                </p>
              </div>
            </div>
            <span>
              <NextLink href={`/${role}`} passHref>
                <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                  Dashboard
                </a>
              </NextLink>
              <button
                onClick={() => {
                  signOut();
                  mutate();
                  mutUserData();
                }}
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-primary hover:bg-brand-accent1h"
              >
                Sign Out
              </button>
            </span>
          </div>
        ) : (
          <div>
            <SignInForm csrfToken={csrfToken} />
            <div className="w-full mt-4 px-1 py-2 bg-yellow-100 rounded flex justify-left items-top text-sm">
              <div className="flex-shrink-0">
                <ArrowCircleRightIcon
                  className="h-5 w-5 text-yellow-400 mx-1"
                  aria-hidden="true"
                />
              </div>
              <div className="">
                <h3 className="text-sm font-semibold text-yellow-800">Note</h3>
                <div className="mt-1 text-sm font-medium text-yellow-700">
                  <p>
                    Make sure to sign in with the same service you used to set
                    up your account.
                  </p>
                </div>
              </div>
            </div>
            {error && (
              <div className="w-full mt-4 px-1 py-2 bg-red-100 rounded flex justify-left items-top text-sm">
                <div className="flex-shrink-0">
                  <ExclamationIcon
                    className="h-5 w-5 text-red-400 mx-1"
                    aria-hidden="true"
                  />
                </div>
                <div className="">
                  <h3 className="text-sm font-semibold text-red-800">
                    {errorInfo.title}
                  </h3>
                  <div className="mt-1 text-sm font-medium text-red-700">
                    <p>{errorInfo.message}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </FormWindow>
    </FormPageLayout>
  );
};

async function getServerSideProps(context: any) {
  const csrfToken = await getCsrfToken(context);
  const providers = await getProviders();
  return {
    props: { csrfToken, providers },
  };
}

export default Page;
