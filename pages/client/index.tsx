import type { NextPage } from "next";

import { RoleLayout } from "layouts/RoleLayout";
import { ClientDashLayout } from "layouts/ClientDash";

const ClientHome: NextPage = (props) => {
  return (
    <ClientDashLayout>
      <main>
        <h1 className="text-4xl">Client Home</h1>
      </main>
    </ClientDashLayout>
  );
};
export default ClientHome;
