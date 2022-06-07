import type { NextPage } from "next";
import { Project } from "@prisma/client";
import useSWR from "swr";

import { ClientDashLayout } from "layouts/ClientDash";
import ProjectCard from "~components/tui/ProjectCard";

const Page: NextPage = (props) => {
  const { data, error } = useSWR<Project[]>(`project`);
  return (
    <ClientDashLayout>
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <div className="flex flex-col space-y-2">
        {data?.map((project) => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </div>
    </ClientDashLayout>
  );
};

export default Page;
