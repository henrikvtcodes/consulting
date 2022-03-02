import { NextPage } from "next";
import {
  ExclamationIcon,
  CheckIcon,
  RefreshIcon,
} from "@heroicons/react/outline";

import FormPageLayout from "layouts/formPage";
import FormWindow from "~components/forms/window";
import SignUpForm from "~components/forms/signUpFull";
import formStyles from "~styles/forms.module.css";
import { useDebouncedFunc } from "~utils/hooks/useDebouncedReq";
import { submitCode, SubmitCodeReturnType } from "~utils/submitCode";

const useValidateInviteCode = () =>
  useDebouncedFunc<SubmitCodeReturnType>(
    (code: string) => submitCode(code),
    1000
  );

// eslint-disable-next-line
const Page: NextPage = (props) => {
  const { inputText, setInputText, results: result } = useValidateInviteCode();

  const safeToSubmit =
    result.status === "success" &&
    result.result &&
    result.result?.isValid === true;
  console.log("Res: Code isValid: ", result.result);

  const color =
    result.status === "success" && safeToSubmit
      ? "emerald"
      : result.status === "loading"
      ? "yellow"
      : "red";

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

            {inputText && (
              <div
                className={`w-full mt-0 px-1 py-2 h-16 bg-${color}-100 rounded text-sm flex grow justify-left align-middle`}
              >
                {result.status === "loading" ? (
                  <div className="w-full flex justify-center align-middle items-center ">
                    <div className="flex-shrink-0">
                      <RefreshIcon
                        className="h-7 w-7 text-yellow-400 animate-spin"
                        aria-hidden="true"
                      />
                    </div>{" "}
                  </div>
                ) : (
                  <div className="w-full flex justify-left items-top text-sm">
                    <div className="flex-shrink-0">
                      {safeToSubmit ? (
                        <CheckIcon
                          className="h-5 w-5 text-emerald-400 mx-1"
                          aria-hidden="true"
                        />
                      ) : (
                        <ExclamationIcon
                          className="h-5 w-5 text-red-400 mx-1"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <div className="">
                      <h3 className={`text-sm font-semibold text-${color}-800`}>
                        {safeToSubmit ? "Valid" : "Invalid"}
                      </h3>
                      {result.result ? (
                        <div
                          className={`mt-1 text-sm font-medium text-${color}-700`}
                        >
                          <p>{result.result.message}</p>
                        </div>
                      ) : (
                        <div
                          className={`mt-1 text-sm font-medium text-${color}-700`}
                        >
                          <p>{"Code was not found"}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
            <button className={formStyles.Button} disabled={!safeToSubmit}>
              Submit
            </button>
          </form>
        </div>
      </FormWindow>
    </FormPageLayout>
  );
};

export default Page;
