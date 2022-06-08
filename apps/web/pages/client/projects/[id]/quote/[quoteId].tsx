import { useRouter } from "next/router";
import useSWR from "swr";
import { ProjectData } from "types";
import { ClientDashLayout } from "layouts/ClientDash";
import ProjectLayout from "layouts/ProjectLayout";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <ClientDashLayout>
      <ProjectLayout></ProjectLayout>
    </ClientDashLayout>
  );
};

export default Page;
