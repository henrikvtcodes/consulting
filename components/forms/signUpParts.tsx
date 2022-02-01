import { useForm, FormProvider } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter, withRouter } from "next/router";
import PasswordStrengthBar from "react-password-strength-bar";
import { ZXCVBNFeedback, ZXCVBNScore } from "zxcvbn";

import formStyles from "~styles/forms.module.css";
import { handleTransition } from "./transition";
import strength from "./strength";
import { testOnSubmit } from "~utils/signin";

type AccountDetailsProps = {
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  refCode: string;
  next?: any;
};

const UserDetails = (props: { next: any }) => {
  const methods = useForm<AccountDetailsProps>();

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isDirty },
  } = methods;

  const router = useRouter();
  const { refCode } = router.query; // get refCode URL parameter to make sure that User is allowed to sign up

  let [password, setPassword] = useState<string>();
  let [passwordsMatch, setPasswordsMatch] = useState<boolean>();

  let evalScore: { score: ZXCVBNScore; feedback: ZXCVBNFeedback } =
    strength(password);

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

      // eslint-disable-next-line
      evalScore = strength(value.password);

      if (evalScore.score < 4) {
        setError("password", { message: "Passwords is not strong enough" });
      }
    });
  }, [setError, watch]);

  return (
    <FormProvider {...methods}>
      <form className="space-y-6" onSubmit={handleSubmit(testOnSubmit)}>
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
          {isDirty && password !== "" ? (
            evalScore.score < 4 ? (
              <p className="text-red-500 text-sm">
                {evalScore.feedback.suggestions}
              </p>
            ) : null
          ) : null}
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
          {isDirty && password !== "" ? (
            passwordsMatch ? (
              <span className="text-green-500 text-sm">passwords match!</span>
            ) : (
              <span className="text-red-500 text-sm">
                passwords do not match.
              </span>
            )
          ) : null}
        </div>
        {/* Hidden input to submit user referral/validation code along with sign in details */}
        <input
          id="refCode"
          {...register("refCode")}
          type="hidden"
          defaultValue={refCode}
          autoComplete="off"
        />
        <input
          id="next"
          {...register("next")}
          type="hidden"
          defaultValue={props.next}
          autoComplete="off"
        />
        <div>
          <button type="submit" className={formStyles.Button}>
            Sign in
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

const PersonalDetails = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(testOnSubmit)}>
      <div className={formStyles.Input}>
        <label htmlFor="name">First Name</label>
        <input
          id="firstname"
          {...register("firstname")}
          placeholder="your legal first name"
          type="text"
          autoComplete="given-name"
          required
        />
      </div>
    </form>
  );
};

const PaymentInformation = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return <form onSubmit={handleSubmit(testOnSubmit)}></form>;
};

export { UserDetails, PersonalDetails, PaymentInformation };
