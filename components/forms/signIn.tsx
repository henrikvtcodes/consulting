import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { getProviders, signIn } from "next-auth/react";

import formStyles from "~styles/forms.module.css";
import { submitSignIn, testOnSubmit } from "~utils/signin";

export type SignInFormProps = {
  email: string;
  password: string;
  "remember-me": boolean;
};

export type SignInComponentProps = {
  csrfToken: string;
};

const SignInForm = ({ csrfToken }: SignInComponentProps) => {
  useEffect(() => {
    console.log(`Current Origin: ${window.location.origin}`);
  });

  const router = useRouter();
  router.basePath;

  return (
    <div className="flex flex-col space-y-2 ">
      <span className="text-center font-semibold text-lg"> Sign in with </span>
      <div className="flex flex-row justify-center items-center space-x-2">
        <button
          onClick={() =>
            signIn("google", {
              callbackUrl: "http://localhost:3000/auth",
            })
          }
          className="w-full inline-flex justify-center items-center align-middle space-x-2 py-2 px-4 border text-brand-text1 border-gray-300 rounded-md shadow-sm bg-gray-100 font-medium hover:bg-gray-200"
        >
          {" "}
          <span className="pr-2">
            <FcGoogle className="h-7 w-7" />
          </span>{" "}
          Google
        </button>
        <button
          onClick={() =>
            signIn("facebook", {
              callbackUrl: "http://localhost:3000/auth",
            })
          }
          className="w-full inline-flex justify-center items-center align-middle space-x-2 py-2 px-4 border text-brand-text1 border-gray-300 rounded-md shadow-sm bg-gray-100 font-medium hover:bg-gray-200"
        >
          {" "}
          <span className="pr-2">
            <FaFacebook className="text-[#006AF5] h-7 w-7" />
          </span>{" "}
          Facebook
        </button>
      </div>
    </div>
  );
};
export default SignInForm;
