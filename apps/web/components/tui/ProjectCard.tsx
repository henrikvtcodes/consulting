import { Project, ProjectStatus } from "@prisma/client";
import NextLink from "next/link";

export const Status = ({ status }: { status: ProjectStatus }) => {
  switch (status) {
    case ProjectStatus.awaitingApproval:
      return (
        <span className="rounded-full px-2 py-1 text-sm bg-yellow-100 text-yellow-600 font-semibold">
          Awaiting Approval
        </span>
      );
    case ProjectStatus.approved:
      return (
        <span className="rounded-full px-2 py-1 text-sm bg-lime-100 text-lime-600 font-semibold">
          Approved
        </span>
      );
    case ProjectStatus.inProgress:
      return (
        <span className="rounded-full px-2 py-1 text-sm bg-blue-100 text-blue-600 font-semibold">
          In Progress
        </span>
      );
    case ProjectStatus.awaitingPayment:
      return (
        <span className="rounded-full px-2 py-1 text-sm bg-teal-100 text-teal-600 font-semibold">
          Payment Pending
        </span>
      );
    case ProjectStatus.completed:
      return (
        <span className="rounded-full px-2 py-1 text-sm bg-green-100 text-green-600 font-semibold">
          Completed
        </span>
      );
    case ProjectStatus.cancelled:
      return (
        <span className="rounded-full px-2 py-1 text-sm bg-red-100 text-red-600 font-semibold">
          Cancelled
        </span>
      );
  }
};

const CardWrapper = ({
  children,
  project,
}: {
  children: React.ReactNode;
  project: Project;
}) => {
  const disabledStatus =
    project.status ===
    (ProjectStatus.awaitingApproval ||
      ProjectStatus.cancelled ||
      ProjectStatus.completed);
  const closedStatus = project.isClosed;

  console.log(disabledStatus, closedStatus);

  switch (true) {
    case disabledStatus || closedStatus:
      return (
        <div className="w-full rounded-lg border-2 py-2 px-3 grid md:grid-cols-3 grid-cols-2 grid-rows-2">
          {children}
        </div>
      );
    default:
      return (
        <NextLink href={`/client/projects/${project.id}`} passHref>
          <a className="no-underline">
            {" "}
            <div className="w-full rounded-lg border-2 py-2 px-3 grid md:grid-cols-3 grid-cols-2 grid-rows-2 transition-shadow ease-in-out hover:shadow-md ">
              {children}
            </div>
          </a>
        </NextLink>
      );
  }
};

const CardContent = ({ project }: { project: Project }) => {
  return (
    <>
      <h3 className="text-xl font-semibold col-start-1 md:col-span-2 col-span-1 row-start-1 row-span-1">
        {project.name as string}
      </h3>
      <p className="text-md col-start-1 col-span-2 row-start-2 row-span-1">
        {project.description as string}
      </p>
      <span className="md:col-start-3 col-start-2 col-span-1 justify-self-end">
        <Status status={project.status} />
      </span>
    </>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <CardWrapper project={project}>
      <CardContent project={project} />
    </CardWrapper>
  );
};

export default ProjectCard;
