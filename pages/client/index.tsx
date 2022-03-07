import type { NextPage } from "next";
import { useSession } from "next-auth/react";

import { RoleLayout } from "layouts/RoleLayout";
import { ClientDashLayout } from "layouts/ClientDash";

const ClientHome: NextPage = (props) => {
  const session = useSession();

  return (
    <ClientDashLayout>
      <main>
        <h1 className="text-4xl">
          Hi,{" "}
          <span className="font-semibold">
            {session.data?.user?.name ? session.data?.user?.name : "User"}
          </span>
          !
        </h1>
      </main>
    </ClientDashLayout>
  );
};
export default ClientHome;
