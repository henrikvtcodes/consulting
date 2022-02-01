import { useRouter } from "next/router";
// @ts-ignore
import Typical from "react-typical";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

import FormPageLayout from "layouts/formPage";
import { getUserRole } from "~utils/lookupUser.server";

// eslint-disable-next-line
const Page = () => {
  // Page that directs user to administrator or client dashboard if logged in, directs to home page if not logged in
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      console.log("User not logged in");
      setTimeout(() => {
        router.push("/auth/sign-in");
      }, 10000);
    }
  }, [router, status, session]);

  return (
    <FormPageLayout>
      <h1 className="text-4xl text-brand-text1">
        <Typical steps={["Please wait while we log you in..."]} loop={1} />
      </h1>
    </FormPageLayout>
  );
};
export default Page;
