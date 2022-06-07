import { useRouter } from "next/router";
import useSWR from "swr";

import { ClientDashLayout } from "layouts/ClientDash";
import { ProjectData } from "types";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR<ProjectData>(`project/${id}`);

  return (
    <ClientDashLayout>
      <div> {JSON.stringify(data)} </div>
    </ClientDashLayout>
  );
};

export default Page;
