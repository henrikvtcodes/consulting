import {
  ExclamationIcon,
  CheckIcon,
  RefreshIcon,
} from "@heroicons/react/outline";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import formStyles from "~styles/forms.module.css";
import { useDebouncedFunc } from "utils/hooks/useDebouncedReq";
import { validateCode, SubmitCodeReturnType } from "utils/submitCode";
import { useApiClient } from "~utils/hooks/useApiClient";

const useValidateInviteCode = () =>
  useDebouncedFunc<SubmitCodeReturnType>(
    (code: string) => validateCode(code),
    1000
  );

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  // Custom hook to prevent excessive requests
  const { inputText, setInputText, results: result } = useValidateInviteCode();

  const client = useApiClient();

  const submitCode = (data: any) => {
    const res = client.post("/invite/submit", {
      body: JSON.stringify({
        code: data.code,
      }),
    });

    res.then((res) => {
      if (res.status == (200 || 201)) {
        router.push("/client");
      }
    });
  };

  const safeToSubmit =
    result.status === "success" &&
    result.result &&
    result.result?.isValid === true;

  const color =
    result.status === "success" && safeToSubmit
      ? "emerald"
      : result.status === "loading"
      ? "yellow"
      : "red";

  return (
    <div className="md:w-[464px] flex flex-col">
      <form
        className="flex flex-col mx-2 md:mx-16 space-y-3"
        onSubmit={handleSubmit(submitCode)}
      >
        <div className={formStyles.Input}>
          <label htmlFor={"code"}>Invite Code</label>
          <input
            {...register("code", { required: true })}
            className="w-2/3"
            placeholder={"Enter Invite Code"}
            type={"text"}
            autoComplete={"off"}
            maxLength={6}
            minLength={6}
            pattern={"[A-Fa-f0-9]{6}"}
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
                <div className="flex-shrink-0" dir="rtl">
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
                  {/* Message or Not Found */}
                  {result.result ? (
                    <div
                      className={`mt-1 text-sm font-medium text-${color}-700`}
                    >
                      <p>{result.result.message}</p>
                    </div>
                  ) : (
                    <div className={`mt-1 text-sm font-medium text-red-700`}>
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
      <div className="text-emerald-800">
        <div className="text-emerald-700"></div>
        <div className="text-emerald-100"></div>
      </div>
    </div>
  );
};

export default SignUpForm;
