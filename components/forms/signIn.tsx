import { useForm } from "react-hook-form";
import { useEffect } from "react";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormProps>();

  return (
    <form className="space-y-6" onSubmit={handleSubmit(submitSignIn)}>
      <div className={formStyles.Input}>
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          {...register("email")}
          type="email"
          autoComplete="email"
          required
        />
      </div>

      <div className={formStyles.Input}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          {...register("password")}
          type="password"
          autoComplete="current-password"
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <div className={formStyles.Checkbox}>
          <input
            id="remember-me"
            {...register("remember-me")}
            type="checkbox"
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>

        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button type="submit" className={formStyles.Button}>
          Sign in
        </button>
      </div>
    </form>
  );
};
export default SignInForm;
