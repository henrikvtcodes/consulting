import type { NextPage } from "next";

import { RoleLayout } from "layouts/RoleLayout";

const AdminHome: NextPage = (props) => {
  return (
    <RoleLayout roles={["admin"]}>
      <main>
        <h1 className="text-4xl">Admin Home</h1>
      </main>
    </RoleLayout>
  );
};
export default AdminHome;
