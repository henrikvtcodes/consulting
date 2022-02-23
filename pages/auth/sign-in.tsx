import { LockClosedIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import type { GetServerSideProps } from "next";
import { getCsrfToken, getProviders } from "next-auth/react";
import { ExclamationIcon } from "@heroicons/react/solid";

import FormPageLayout from "layouts/formPage";
import FormWindow from "~components/forms/window";
import SignInForm from "~components/forms/signIn";

// eslint-disable-next-line
const Page = ({ csrfToken }: { csrfToken: string }) => {
  return (
    <FormPageLayout>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="my-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <FormWindow>
        <SignInForm csrfToken={csrfToken} />

        <div className="w-full mt-4 px-1 py-2 bg-yellow-100 rounded flex justify-left items-top text-sm">
          <div className="flex-shrink-0">
            <ExclamationIcon
              className="h-5 w-5 text-yellow-400 mx-1"
              aria-hidden="true"
            />
          </div>
          <div className="">
            <h3 className="text-sm font-semibold text-yellow-800">Note</h3>
            <div className="mt-1 text-sm font-medium text-yellow-700">
              <p>
                Make sure to sign in with the same service you used to set up
                your account.
              </p>
            </div>
          </div>
        </div>
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
