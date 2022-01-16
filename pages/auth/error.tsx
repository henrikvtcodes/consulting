import { useRouter } from "next/router";

import FormPageLayout from "layouts/formPage";
import FormWindow from "~components/forms/window";

const Page = () => {
  const router = useRouter();

  const { error } = router.query;

  return (
    <FormPageLayout>
      <FormWindow>
        <div className="flex flex-col items-center justify-center h-full">
          <p>Oh No! Something went wrong. Please try again later.</p>
          <p>{error}</p>
        </div>
      </FormWindow>
    </FormPageLayout>
  );
};

export default Page;
