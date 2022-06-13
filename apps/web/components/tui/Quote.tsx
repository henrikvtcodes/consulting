import { QuoteStatus } from "@prisma/client";
import type { QuoteData } from "types";

export const QuoteStatusIndicator = (props: { status: QuoteStatus }) => {
  switch (props.status) {
    case QuoteStatus.awaitingApproval:
      return (
        <span className="rounded-full px-2 py-1 text-sm bg-yellow-100 text-yellow-600 font-semibold">
          Awaiting Approval
        </span>
      );
    case QuoteStatus.approved:
      return (
        <span className="rounded-full px-2 py-1 text-sm bg-lime-100 text-lime-600 font-semibold">
          Approved
        </span>
      );
    case QuoteStatus.invoiced:
      return (
        <span className="rounded-full px-2 py-1 text-sm bg-blue-100 text-blue-600 font-semibold">
          In Progress
        </span>
      );
    case QuoteStatus.completed:
      return (
        <span className="rounded-full px-2 py-1 text-sm bg-green-100 text-green-600 font-semibold">
          Completed
        </span>
      );
    case QuoteStatus.declined:
      return (
        <span className="rounded-full px-2 py-1 text-sm bg-red-100 text-red-600 font-semibold">
          Cancelled
        </span>
      );
    default:
      return (
        <span className="rounded-full px-2 py-1 text-sm bg-gray-100 text-gray-600 font-semibold">
          Loading
        </span>
      );
  }
};

export const QuoteCard = (props: { quote: QuoteData }) => {
  const { quote } = props;

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Quote Details
        </h3>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {quote?.name}
            </dd>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Status</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <QuoteStatusIndicator status={quote?.status} />
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Cost</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {`$${quote?.amount ? quote.amount / 100 : "~"}`}
            </dd>
          </div>

          <div className="py-4 sm:py-5 sm:flex sm:justify-items-center sm:gap-4 sm:px-6">
            <button
              type="button"
              onClick={() => window.open(quote?.file, "_blank")}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
            >
              View
            </button>
            {quote?.status === QuoteStatus.awaitingApproval && (
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-primary hover:bg-brand-accent1h focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
              >
                Mark Approved
              </button>
            )}
          </div>
        </dl>
      </div>
    </div>
  );
};
