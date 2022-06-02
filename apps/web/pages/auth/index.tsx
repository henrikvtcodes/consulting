import { useRouter } from "next/router";
import { NextPage } from "next";
// @ts-ignore
import Typical from "react-typical";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { useAsync } from "react-async-hook";

import FormPageLayout from "layouts/formPage";
import { useRole } from "utils/hooks/useRole";
import { useUser } from "~utils/hooks/useUser";

const Page = () => {
  // Page that directs user to administrator or client dashboard if logged in, directs to sign in page if not logged in
  const router = useRouter();
  const { user, updateUser, isValidating } = useUser();

  const { role } = useRole();

  const { data: inviteStatus, error } = useSWR(`invite/status`);

  const isInvited: boolean = inviteStatus?.invited;

  console.log("isInvited", isInvited);

  if (user !== (undefined || null) && !isValidating) {
    if (isInvited) {
      if (role === "admin") {
        router.push("/admin");
      } else if (role === "client") {
        router.push("/client");
      }
    } else {
      router.push("/auth/sign-up");
    }
  } else if (user !== (undefined || null) && !isValidating) {
    router.push("/auth/sign-in");
  }

  return (
    <FormPageLayout>
      <h1 className="text-4xl text-brand-text1">
        <Typical steps={["Please wait while we log you in..."]} loop={1} />
      </h1>
    </FormPageLayout>
  );
};
export default Page;
