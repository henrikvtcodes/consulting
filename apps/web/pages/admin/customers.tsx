import type { NextPage } from "next";
import useSWR from "swr";

import { AdminDashLayout } from "layouts/DashLayout";
import { CustomerList } from "~components/admin/CustomerList";
import { User } from "types";

const Page = () => {
  const { data, error } = useSWR<{ users: User[] }>(`user/all`);
  console.log(data);
  return (
    <AdminDashLayout>
      <CustomerList users={data?.users} />
    </AdminDashLayout>
  );
};
export default Page;
