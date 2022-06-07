import { useRouter } from "next/router";
import useSWR from "swr";

import FormPageLayout from "layouts/FormBgPage";
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
    if (isInvited === true) {
      if (role === "admin") {
        router.push("/admin");
      } else if (role === "client") {
        router.push("/client");
      }
    } else if (isInvited === false) {
      router.push("/auth/sign-up");
    }
  } else if (user !== (undefined || null) && !isValidating) {
    router.push("/auth/sign-in");
  }

  return (
    <FormPageLayout>
      <div className="rounded-lg bg-white min-h-8 w-auto aspect-square px-6 flex flex-col justify-center items-center basis-1/3 flex-initial grow-0">
        <span className="rounded-full h-8 w-8 animate-spin bg-gradient-to-t from-blue-400  to-green-400" />
        {/* <div className="flex flex-col justify-center items-end pt-2">
          <h3 className=" font-semibold">Please wait</h3>
        </div> */}
      </div>
    </FormPageLayout>
  );
};
export default Page;
