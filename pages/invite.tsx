import { useForm } from "react-hook-form";

import FormPageLayout from "layouts/formPage";
import FormWindow from "~components/forms/window";
import { Input, SubmitButton } from "~components/forms/inputs";

const Page = () => {
  const { register, handleSubmit, ...methods } = useForm();

  return (
    <FormPageLayout>
      <FormWindow>
        <form>
          <Input
            type="text"
            id="code"
            label="Invite Code"
            auto="off"
            isRequired={true}
          />
        </form>
      </FormWindow>
    </FormPageLayout>
  );
};

export default Page;
