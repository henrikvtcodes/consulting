

import FormPageLayout from "layouts/formPage";
import FormWindow from "~components/forms/window";
import SignUpForm from "~components/forms/signUpFull";

const Page = () => {
  return (
    <FormPageLayout>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
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
