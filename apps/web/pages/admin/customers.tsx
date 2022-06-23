import type { NextPage } from "next";
import useSWR from "swr";

import { AdminDashLayout } from "layouts/DashLayout";
import { CustomerList } from "~components/admin/CustomerList";
import { UserData } from "types";

const Page = () => {
  const { data, error } = useSWR<{ users: UserData[] }>(`user/all`);
  console.log(data);
  return (
    <AdminDashLayout>
      <CustomerList users={data?.users} />
    </AdminDashLayout>
  );
};
export default Page;
