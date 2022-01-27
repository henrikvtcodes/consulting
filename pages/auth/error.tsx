import { useRouter } from "next/router";
import { ExclamationIcon } from "@heroicons/react/outline";
import { useEffect, useRef, useState } from "react";
import NextLink from "next/link";

import FormPageLayout from "layouts/formPage";
import FormWindow from "~components/forms/window";
import config from "~utils/config";

// eslint-disable-next-line
const Page = (props: any) => {
  const router = useRouter();

  const error = router.query.error;

  let [errorType, setErrorType] = useState("Default Value");
  let [errorMessage, setErrorMessage] = useState("Default Value");

  useEffect(() => {
    let errorParam = error ? error.toString() : "Default";
    setErrorType(config.NextAuthErrorParams[errorParam].title);
    setErrorMessage(config.NextAuthErrorParams[errorParam].message);
  }, [error]);

  return (
    <FormPageLayout>
      <FormWindow>
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <span className="flex justify-center items-center rounded-full bg-red-200 sm:mx-0 sm:h-12 sm:w-12 ">
            <ExclamationIcon
              className="h-10 w-10 text-red-600"
              aria-hidden="true"
            />
          </span>
          <h2 className="text-center text-xl font-semibold">
            {" "}
            Oh No! An error ocurred.
          </h2>

          <p className="w-3/4 flex flex-col text-center rounded-md bg-red-200">
            <span className="font-semibold pt-4 px-4">{errorType}</span>
            <span className="pb-4 px-4">{errorMessage}</span>
          </p>

          <NextLink href="/auth/sign-in" passHref>
            <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-brand-text1 bg-gray-200 hover:bg-gray-300 sm:px-8">
              Go Back
            </a>
          </NextLink>
        </div>
      </FormWindow>
    </FormPageLayout>
  );
};

export default Page;
