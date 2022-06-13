import { ArrowSmLeftIcon } from "@heroicons/react/outline";
import { HTTPError } from "ky";
import { useRouter } from "next/router";
import useSWR from "swr";
import { ProjectData } from "types";
import { ProjectStatusIndicator } from "~components/client/ProjectCard";
import { ErrorComponent } from "../pages/404";

const ProjectLayout = ({ children }: { children?: React.ReactNode }) => {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR<ProjectData, HTTPError>(`project/${id}`);

  if (error && error.response.status === 404) {
    return (
      <div className="my-auto">
        {" "}
        <ErrorComponent url="/client/projects" label="to projects" />
      </div>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => router.back()}
        className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
      >
        <ArrowSmLeftIcon className="text-gray-700 h-auto w-4" />
        Back
      </button>
      <div className="py-5 border-b border-gray-200">
        <h3 className="text-lg leading-6 font-medium text-gray-900 ">
          {data?.name ? data.name : "Loading..."}
        </h3>
        <div className="my-2">
          <ProjectStatusIndicator status={data?.status} />
        </div>
        <p className="mt-3 max-w-4xl text-sm text-gray-500">
          {data?.description ? data.description : "Loading..."}
        </p>
      </div>
      {children}
    </div>
  );
};

export default ProjectLayout;
