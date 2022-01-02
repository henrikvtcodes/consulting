import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";

import formStyles from "~styles/forms.module.css";
import { testOnSubmit } from "~utils/signin";

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
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setError,
    formState: { errors, isDirty },
  } = useForm<SignUpFormProps>(); // initialize form state hook
  
  let [password, setPassword] = useState<string>();
  let [passwordsMatch, setPasswordsMatch] = useState<boolean>();

  useEffect(() => {
    
    let subscription = watch((value, { name, type }) => {
      setPassword(value.password);
      
      // Make sure password and confirm password match
      if (value.password !== value.confirmPassword) {
        setPasswordsMatch(false);
        setError("confirmPassword", { message: "Passwords do not match" });
      }
      else if (value.password === value.confirmPassword){
        setPasswordsMatch(true);
      }
    });
  });

  const router = useRouter();
  const { refCode } = router.query; // get refCode URL parameter to make sure that User is allowed to sign up

    return (
      <form className="space-y-6" onSubmit={handleSubmit(testOnSubmit)}>
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
        <div className={formStyles.Input}>
          <label htmlFor="name">Last Name</label>
          <input
            id="lastname"
            {...register("lastname")}
            placeholder="your legal surname"
            type="text"
            autoComplete="family-name"
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
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            {...register("email")}
            placeholder=""
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
            (
              passwordsMatch ? (
                <span className="text-green-500 text-sm">passwords match!</span>
              ) : (
                <span className="text-red-500 text-sm">
                  passwords do not match.
                </span>
              )
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
          <button type="submit" className={formStyles.Button}>
            Sign in
          </button>
        </div>
      </form>
    );
};

export default SignUpForm;