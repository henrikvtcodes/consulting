import type { SignInFormProps } from "~components/forms/signIn";
import type { SignUpFormProps } from "~components/forms/signUpFull";
import logger from "./logger";

const { miscEvent } = logger;

// TODO: Rewrite sign in to next-auth

const testOnSubmit = (formData: any) => {};

const submitSignIn = async (formData: SignInFormProps) => {
  console.log(` Email: ${formData.email}`);
  console.log(` Password: ${formData.password}`);
};

export { submitSignIn, testOnSubmit };
