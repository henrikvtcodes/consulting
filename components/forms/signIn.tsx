

import formStyles from "~styles/forms.module.css";
import { submitSignIn } from "~utils/formHandle";

const SignInForm = () => {
  return (
    <form className="space-y-6" onSubmit={submitSignIn}>
      <div className={formStyles.Input}>
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>

      <div className={formStyles.Input}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <div className={formStyles.Checkbox}>
          <input id="remember-me" name="remember-me" type="checkbox" />
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
}
export default SignInForm;