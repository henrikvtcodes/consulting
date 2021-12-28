
import { supabase } from "~utils/Supabase";
import type { SignInFormProps } from "~components/forms/signIn";
import type { SignUpFormProps } from "~components/forms/signUpFull";
import logger from "~utils/logger";

const { miscEvent } = logger;

const submitSignUp = async (formData: SignUpFormProps) => {
  console.log(` Email: ${formData.email}`);
  console.log(` Password: ${formData.password}`);
  // console.log(` Confirm Password: ${formData.confirmPassword}`);

  const { user, session, error } = await supabase.auth.signUp(
    {
      email: formData.email,
      password: formData.password,
    },
    {
      redirectTo: `${window.location.origin}/handleLogin`,
    }
  );
  if (error) {
    miscEvent("error", `Sign Up Error (${error.status})`, error.message);
  }
  return { user, session, error };
};
