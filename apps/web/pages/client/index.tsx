import { useSession } from "next-auth/react";

import { ClientDashLayout } from "layouts/ClientDash";
import { useUser } from "utils/hooks/useUser";

const ClientHome = () => {
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
