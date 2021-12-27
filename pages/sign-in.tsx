import { LockClosedIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

import FormPageLayout from "layouts/formPage";
import FormWindow from "~components/forms/window";
import SignInForm from "~components/forms/signIn";
const Page = () => {
  return (
    <FormPageLayout>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <FormWindow>
        <SignInForm />
      </FormWindow>

    </FormPageLayout>
  );
};

export default Page;
