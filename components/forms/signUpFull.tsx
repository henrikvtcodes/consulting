import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";

import formStyles from "~styles/forms.module.css";
import { testOnSubmit } from "~utils/signin";
import * as SignUpParts from "./signUpParts"

export type SignUpFormProps = {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  refCode: string;
};

type Step = {
  index: number;
}

const SignUpForm = () => {

  const formMethods = useForm<SignUpFormProps>();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isDirty },
  } = formMethods;

  const [ step, setStep ] = useState<Step>({ index: 0 });

  const next = () => setStep(() => ({ index: step.index++ }));

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={testOnSubmit}>
        {
          
        }
      </form>
    </FormProvider>
  );
};

export default SignUpForm;