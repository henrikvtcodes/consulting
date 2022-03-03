import { useRouter } from "next/router";
import { NextPage } from "next";
// @ts-ignore
import Typical from "react-typical";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

import FormPageLayout from "layouts/formPage";
import { useRole } from "~utils/hooks/useRole";

// eslint-disable-next-line
const Page: NextPage = (props) => {
  // Page that directs user to administrator or client dashboard if logged in, directs to sign in page if not logged in
  const router = useRouter();
  const { data: session, status } = useSession();

  const { role } = useRole();

  useEffect(() => {
    if (status === "unauthenticated") {
      setTimeout(() => {
        router.push("/auth/sign-in");
      }, 2000);
    } else if (status === "authenticated") {
      console.log(`User Role: ${role}`);

      switch (role) {
        // default:
        //   setTimeout(() => {
        //     router.push("/auth/error?error=InvalidRole");
        //   }, 5000);
        case "admin":
          setTimeout(() => {
            router.push("/admin");
          }, 2000);
          break;
        case "client":
          setTimeout(() => {
            router.push("/client");
          }, 2000);
          break;
      }
    }
  }, [router, status, session, role]);

  return (
    <FormPageLayout>
      <h1 className="text-4xl text-brand-text1">
        <Typical steps={["Please wait while we log you in..."]} loop={1} />
      </h1>
    </FormPageLayout>
  );
};
export default Page;
