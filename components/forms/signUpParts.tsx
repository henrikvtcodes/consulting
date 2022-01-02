import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter, withRouter } from "next/router";
import PasswordStrengthBar from "react-password-strength-bar";

import formStyles from "~styles/forms.module.css";
import { handleTransition } from "./transition";
import { TextField } from "./inputs";

type AccountDetailsProps = {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  refCode: string;
};

const UserDetails = () => {

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isDirty },
  } = useForm<AccountDetailsProps>();

  const router = useRouter();
  const { refCode } = router.query; // get refCode URL parameter to make sure that User is allowed to sign up

  let [password, setPassword] = useState<string>();
  let [passwordsMatch, setPasswordsMatch] = useState<boolean>();

  useEffect(() => {
    let subscription = watch((value, { name, type }) => {
      setPassword(value.password);

      // Make sure password and confirm password match
      if (value.password !== value.confirmPassword) {
        setPasswordsMatch(false);
        setError("confirmPassword", { message: "Passwords do not match" });
      } else if (value.password === value.confirmPassword) {
        setPasswordsMatch(true);
      }
    });
  }, [setError, watch]);

  return (
    <form className="space-y-6" onSubmit={handleSubmit()}>
      <div className={formStyles.Input}>
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          {...register("email")}
          placeholder="johnappleseed@example.com"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <div className={formStyles.Input}>
        <label htmlFor="name">Phone</label>
        <input
          id="tel"
          {...register("phone")}
          placeholder="123-456-7890"
          type="tel-national"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          autoComplete="tel"
          required
        />
      </div>
      <div className={formStyles.Input}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          {...register("password")}
          placeholder="a nice strong password"
          type="password"
          autoComplete="new-password"
          required
        />
        {isDirty === true && <PasswordStrengthBar password={password} />}
      </div>

      <div className={formStyles.ConfirmPasswordInput}>
        <label htmlFor="password">Confirm Password</label>
        <input
          id="confirmPassword"
          {...register("confirmPassword")}
          placeholder="retype your password"
          type="password"
          autoComplete="new-password"
          required
        />
        {isDirty ? (
          passwordsMatch ? (
            <span className="text-green-500 text-sm">passwords match!</span>
          ) : (
            <span className="text-red-500 text-sm">
              passwords do not match.
            </span>
          )
        ) : null}
      </div>

      <div>
        {/* Hidden input to submit user referral/validation code along with sign in details */}
        <input
          id="refCode"
          {...register("refCode")}
          type="hidden"
          defaultValue={refCode}
          autoComplete="off"
        />
      </div>

      <div>
        <button
          type="submit"
          className={formStyles.Button}
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

const PersonalDetails  = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit()}>

    </form>
  )
};

const PaymentInformation = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit()}>

    </form>
  )
};


export { UserDetails, PersonalDetails, PaymentInformation };