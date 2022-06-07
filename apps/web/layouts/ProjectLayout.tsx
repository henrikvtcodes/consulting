import { useRouter } from "next/router";
import useSWR from "swr";
import { ProjectData } from "types";
import { Status } from "~components/tui/ProjectCard";

const ProjectLayout = ({ children }: { children?: React.ReactNode }) => {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR<ProjectData>(`project/${id}`);

  return (
    <div>
      <div className="pb-5 border-b border-gray-200">
        <h3 className="text-lg leading-6 font-medium text-gray-900 ">
          {data?.name}
        </h3>
        <div className="my-2">
          <Status status={data?.status} />
        </div>
        <p className="mt-3 max-w-4xl text-sm text-gray-500">
          {data?.description}
        </p>
      </div>
      {children}
    </div>
  );
};

export default ProjectLayout;
