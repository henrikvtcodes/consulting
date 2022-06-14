import type { NextPage } from "next";
import useSWR from "swr";
import { Invite } from "@prisma/client";
import { useState } from "react";

import { AdminDashLayout } from "layouts/DashLayout";
import { InviteList } from "~components/admin/InviteList";
import { InviteModal } from "components/admin/CreateInviteModal";

const Page = () => {
  const { data: invites, error } = useSWR<Invite[]>("invite/all");
  const [openModal, setOpenModal] = useState(false);
  return (
    <AdminDashLayout>
      <InviteList invites={invites} setOpen={setOpenModal} />
      <InviteModal open={openModal} setOpen={setOpenModal} />
    </AdminDashLayout>
  );
};
export default Page;
