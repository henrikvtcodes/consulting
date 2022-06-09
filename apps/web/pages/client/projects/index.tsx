import type { NextPage } from "next";
import { Project } from "@prisma/client";
import useSWR from "swr";
import { useState } from "react";
import { HTTPError } from "ky";

import { ClientDashLayout } from "layouts/ClientDash";
import ProjectCard from "~components/tui/ProjectCard";
import { RequestProject } from "~components/forms/RequestProject";

const Page: NextPage = () => {
  const { data, error } = useSWR<Project[]>(`project`, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      const err = error as HTTPError;
      if (err.response.status === 400) {
        return;
      }
    },
  });

  let message: string | null = null;

  const err = error as HTTPError;
  if (err?.response.status === 400) {
    message =
      "Please go to your Account page and register your billing information.";
  }

  const [openRequest, setOpenRequest] = useState(false);
  return (
    <ClientDashLayout>
      <RequestProject open={openRequest} setOpen={setOpenRequest} />
      <div className="flex justify-between w-full">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <span>
          <button
            type="button"
            disabled={message !== null}
            onClick={() => setOpenRequest(true)}
            className="justify-self-end inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-primary hover:bg-brand-accent1h focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent2"
          >
            {message ? "Unavailable" : "Request Project"}
          </button>
        </span>
      </div>
      <div className="flex flex-col space-y-2">
        {data?.length > 0 ? (
          data?.map((project) => {
            return <ProjectCard project={project} key={project.id} />;
          })
        ) : (
          <div>{message ? message : "Request a project!"}</div>
        )}
      </div>
    </ClientDashLayout>
  );
};

export default Page;
