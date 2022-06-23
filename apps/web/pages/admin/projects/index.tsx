import type { NextPage } from "next";
import { Project } from "@prisma/client";
import useSWR from "swr";
import { useState } from "react";
import { HTTPError } from "ky";

import { ClientDashLayout } from "layouts/DashLayout";
import ProjectCard from "~components/admin/ProjectCard";
import { CreateProject } from "~components/admin/CreateProject";

const Page: NextPage = () => {
  const { data, error } = useSWR<Project[]>(`project/all`, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      const err = error as HTTPError;
      if (err.response.status === 400) {
        return;
      }
    },
  });

  const [openCreate, setOpenCreate] = useState(false);
  return (
    <ClientDashLayout>
      <CreateProject open={openCreate} setOpen={setOpenCreate} />
      <div className="flex justify-between w-full">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <span>
          <button
            type="button"
            onClick={() => setOpenCreate(true)}
            className="justify-self-end inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-primary hover:bg-brand-accent1h focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent2"
          >
            {"Create Project"}
          </button>
        </span>
      </div>
      <div className="flex flex-col space-y-2">
        {data?.length > 0 ? (
          data?.map((project) => {
            return <ProjectCard project={project} key={project.id} />;
          })
        ) : (
          <div>{"Create a Project!"}</div>
        )}
      </div>
    </ClientDashLayout>
  );
};

export default Page;
