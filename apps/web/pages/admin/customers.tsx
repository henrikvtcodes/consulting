import type { NextPage } from "next";

import { AdminDashLayout } from "layouts/DashLayout";

const Page = () => {
  return (
    <AdminDashLayout>
      <main>
        <h1 className="text-4xl">Admin Customers</h1>
      </main>
    </AdminDashLayout>
  );
};
export default Page;
