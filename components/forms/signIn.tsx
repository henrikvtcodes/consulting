import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
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
    <div className="flex flex-col justify-center items-center space-y-2">
      <span> Sign in with </span>
      <button
        onClick={() =>
          signIn("google", {
            callbackUrl: "http://localhost:3000/auth",
          })
        }
        className="w-full inline-flex justify-center py-2 px-4 border text-brand-text1 border-gray-300 rounded-md shadow-sm bg-gray-100 font-medium hover:bg-gray-200"
      >
        {" "}
        <FaGoogle /> Google{" "}
      </button>
      <button
        onClick={() =>
          signIn("facebook", {
            callbackUrl: "http://localhost:3000/auth",
          })
        }
        className="w-full inline-flex justify-center py-2 px-4 border text-brand-text1 border-gray-300 rounded-md shadow-sm bg-gray-100 font-medium hover:bg-gray-200"
      >
        {" "}
        <FaFacebookF /> Facebook{" "}
      </button>
    </div>
  );
};
export default SignInForm;
