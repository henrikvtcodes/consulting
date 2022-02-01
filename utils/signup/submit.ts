import type { SignInFormProps } from "~components/forms/signIn";
import type { SignUpFormProps } from "~components/forms/signUpFull";
import logger from "~utils/logger";

const { miscEvent } = logger;

const submitSignUp = async (formData: SignUpFormProps) => {
  console.log(` Email: ${formData.email}`);
  console.log(` Password: ${formData.password}`);
  // console.log(` Confirm Password: ${formData.confirmPassword}`);
};
