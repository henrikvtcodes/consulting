import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
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
    setError,
    formState: { errors, isDirty },
  } = useForm<SignUpFormProps>(); // initialize form state hook
  
  let passwords = watch(["password", "confirmPassword"]);

  const router = useRouter();
  const { refCode } = router.query; // get refCode URL parameter to make sure that User is allowed to sign up

    return (
      <form className="space-y-6" onSubmit={handleSubmit(testOnSubmit)}>
        <div className={formStyles.Input}>
          <label htmlFor="name">First Name</label>
          <input
            id="firstname"
            {...register("firstname")}
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
            autoComplete="new-password"
            required
          />
          {isDirty === true && <PasswordStrengthBar password={passwords[0]} />}
        </div>

        <div className={formStyles.ConfirmPasswordInput}>
          <label htmlFor="password">Confirm Password</label>
          <input
            id="password"
            {...register("confirmPassword")}
            type="password"
            autoComplete="new-password"
            required
            onChange={(e) => {
              if (passwords[0] === passwords[1]) {
                setError(
                  "confirmPassword",
                  { type: "validate", message: "Passwords do not match" },
                  { shouldFocus: true }
                );
              }
            }}
          />
          {isDirty === true ? (
            passwords[0] === passwords[1] ? (
              <span className="text-green-500">Passwords match!</span>
            ) : (
              <span className="text-red-500"> Passwords do not match. </span>
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