import type { NextPage } from "next";

import { RoleLayout } from "layouts/RoleLayout";

const ClientHome: NextPage = (props) => {
  return (
    <RoleLayout roles={["client"]}>
      <main>
        <h1 className="text-4xl">Client Home</h1>
      </main>
    </RoleLayout>
  );
};
export default ClientHome;
