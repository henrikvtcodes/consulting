import { LockClosedIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import type { GetServerSideProps } from "next";
import { getCsrfToken, getProviders } from "next-auth/react";

import FormPageLayout from "layouts/formPage";
import FormWindow from "~components/forms/window";
import SignInForm from "~components/forms/signIn";

// eslint-disable-next-line
const Page = ({ csrfToken }: { csrfToken: string }) => {
  return (
    <FormPageLayout>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <FormWindow>
        <SignInForm csrfToken={csrfToken} />
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
