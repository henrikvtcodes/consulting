import { NextPage } from "next";

import FormPageLayout from "layouts/formPage";
import FormWindow from "~components/forms/window";
import SignUpForm from "~components/forms/signUpFull";
import { useDebouncedFunc } from "~utils/hooks/useDebouncedReq";
import { validateCode, SubmitCodeReturnType } from "~utils/submitCode";

// eslint-disable-next-line
const Page: NextPage = (props) => {
  return (
    <FormPageLayout title="Sign Up" desc="Confirm your account">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="my-2 md:my-6 text-center text-3xl font-extrabold text-gray-900">
          Sign Up
        </h2>
      </div>

      <FormWindow>
        <SignUpForm />
      </FormWindow>
    </FormPageLayout>
  );
};

export default Page;
