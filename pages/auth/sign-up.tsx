import FormPageLayout from "layouts/formPage";
import FormWindow from "~components/forms/window";
import SignUpForm from "~components/forms/signUpFull";
import formStyles from "~styles/forms.module.css";

// eslint-disable-next-line
const Page = (props: any) => {
  return (
    <FormPageLayout title="Sign Up" desc="Confirm your account">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign Up
        </h2>
      </div>

      <FormWindow>
        <form>
          <div className={formStyles.Input}>
            <label htmlFor={"code"}>Invite Code</label>
            <input
              id={"code"}
              placeholder={"Enter Invite Code"}
              type={"text"}
              autoComplete={"off"}
              required
            />
          </div>
        </form>
      </FormWindow>
    </FormPageLayout>
  );
};

export default Page;
