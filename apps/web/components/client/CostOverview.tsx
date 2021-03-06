import useSWR from "swr";
import { ProjectData } from "types";

const CostOverview = ({ projectId }: { projectId: string }) => {
  const { data: project } = useSWR<ProjectData>(`project/${projectId}`);
  return (
    <div className="my-4 mt-4">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Overview</h3>
      <dl className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
          <dt className="text-sm font-medium text-gray-500 truncate">
            Total Cost
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">
            {"$"}
            {project?.totalCost?.toString()
              ? project.totalCost.toString()
              : "~"}
          </dd>
        </div>
        <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
          <dt className="text-sm font-medium text-gray-500 truncate">
            Total Due
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">
            {"$"}
            {project?.totalDue?.toString() ? project.totalDue.toString() : "~"}
          </dd>
        </div>
        <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
          <dt className="text-sm font-medium text-gray-500 truncate">
            Total Paid
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">
            {"$"}
            {project?.totalPaid?.toString()
              ? project.totalPaid.toString()
              : "~"}
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default CostOverview;
