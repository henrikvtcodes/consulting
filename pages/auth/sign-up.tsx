import { NextPage } from "next";

import FormPageLayout from "layouts/formPage";
import FormWindow from "~components/forms/window";
import SignUpForm from "~components/forms/signUpFull";
import formStyles from "~styles/forms.module.css";
import { useDebouncedFunc } from "~utils/hooks/useDebouncedReq";
import { submitCode } from "~utils/submitCode";
import { resourceLimits } from "worker_threads";

const useValidateInviteCode = () =>
  useDebouncedFunc((code: string) => submitCode(code));

// eslint-disable-next-line
const Page: NextPage = (props) => {
  const {
    inputText,
    setInputText,
    searchResults: result,
  } = useValidateInviteCode();

  return (
    <FormPageLayout title="Sign Up" desc="Confirm your account">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="my-6 text-center text-3xl font-extrabold text-gray-900">
          Sign Up
        </h2>
      </div>

      <FormWindow>
        <div className="md:w-[464px] flex flex-col">
          <form className="flex flex-col mx-16 space-y-3">
            <div className={formStyles.Input}>
              <label htmlFor={"code"}>Invite Code</label>
              <input
                id={"code"}
                className="w-2/3"
                placeholder={"Enter Invite Code"}
                type={"text"}
                autoComplete={"off"}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                required
              />
            </div>
            {result.error && (
              <div className="w-full rounded">
                {result.error && result.error.message}
              </div>
            )}
            <button
              className={formStyles.Button}
              disabled={result.loading || result.error !== undefined}
            >
              Submit
            </button>
          </form>
        </div>
      </FormWindow>
    </FormPageLayout>
  );
};

export default Page;
