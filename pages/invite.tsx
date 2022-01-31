import { useForm } from "react-hook-form";

import FormPageLayout from "layouts/formPage";
import FormWindow from "~components/forms/window";
import { Input, SubmitButton } from "~components/forms/inputs";

// eslint-disable-next-line
const Page = (props: any) => {
  const { register, handleSubmit, ...methods } = useForm();

  return (
    <FormPageLayout>
      <FormWindow>
        <form>
          <label htmlFor={"code"}>{"Invite Code"}</label>
          <input
            id={"code"}
            {...register("code")}
            placeholder={"Enter Invite Code"}
            type={"text"}
            autoComplete={"off"}
            required
          />
        </form>
      </FormWindow>
    </FormPageLayout>
  );
};

export default Page;
