import type { NextPage } from "next";

import { AdminDashLayout } from "layouts/DashLayout";
import ProjectLayout from "layouts/ProjectLayout";

const Page = () => {
  return (
    <AdminDashLayout>
      <ProjectLayout></ProjectLayout>
    </AdminDashLayout>
  );
};
export default Page;
