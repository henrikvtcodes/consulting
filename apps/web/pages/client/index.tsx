import type { NextPage } from "next";
import { useSession } from "next-auth/react";

import { RoleLayout } from "layouts/RoleLayout";
import { ClientDashLayout } from "layouts/ClientDash";
import { useUser } from "apps/web/utils/hooks/useUser";

const ClientHome: NextPage = (props) => {
  const { user } = useUser();

  return (
    <ClientDashLayout>
      <main>
        <h1 className="text-4xl">
          Hi, <span className="font-semibold">{user?.name}</span>!
        </h1>
      </main>
    </ClientDashLayout>
  );
};

export default ClientHome;
