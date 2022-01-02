import { useForm } from "react-hook-form";
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

const SignUpForm = () => {

    return (
      <SignUpParts.UserDetails />
    );
};

export default SignUpForm;