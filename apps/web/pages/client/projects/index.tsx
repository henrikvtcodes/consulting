import type { NextPage } from "next";
import { Project } from "@prisma/client";
import useSWR from "swr";
import { useState } from "react";

import { ClientDashLayout } from "layouts/ClientDash";
import ProjectCard from "~components/tui/ProjectCard";
import { RequestProject } from "~components/forms/RequestProject";

const Page: NextPage = () => {
  const { data, error } = useSWR<Project[]>(`project`);

  const [openRequest, setOpenRequest] = useState(false);
  return (
    <ClientDashLayout>
      <RequestProject open={openRequest} setOpen={setOpenRequest} />
      <div className="flex justify-between w-full">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <span>
          <button
            type="button"
            onClick={() => setOpenRequest(true)}
            className="justify-self-end inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-primary hover:bg-brand-accent1h focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent2"
          >
            Request Project
          </button>
        </span>
      </div>
      <div className="flex flex-col space-y-2">
        {data?.map((project) => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </div>
    </ClientDashLayout>
  );
};

export default Page;
