import { useRouter } from "next/router";
import useSWR from "swr";

import { ClientDashLayout } from "layouts/ClientDash";
import { ProjectData } from "types";
import ProjectLayout from "layouts/ProjectLayout";
import CostOverview from "~components/tui/CostOverview";
import QuoteList from "~components/tui/QuoteList";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR<ProjectData>(`project/${id}`);

  return (
    <ClientDashLayout>
      <ProjectLayout>
        <CostOverview projectId={id as string} />
        <QuoteList />
      </ProjectLayout>
    </ClientDashLayout>
  );
};

export default Page;
