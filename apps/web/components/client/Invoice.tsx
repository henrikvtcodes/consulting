import { Invoice, InvoiceStatus } from "@prisma/client";
import { InvoiceData } from "types";

export const InvoiceStatusIndicator = (props: { status: InvoiceStatus }) => {
  switch (props.status) {
    case InvoiceStatus.draft:
      return (
        <span className="rounded-full px-2 py-1 text-sm bg-yellow-100 text-yellow-600 font-semibold">
          Awaiting Approval
        </span>
      );
    case InvoiceStatus.paid:
      return (
        <span className="rounded-full px-2 py-1 text-sm bg-lime-100 text-lime-600 font-semibold">
          Approved
        </span>
      );
    case InvoiceStatus.open:
      return (
        <span className="rounded-full px-2 py-1 text-sm bg-blue-100 text-blue-600 font-semibold">
          In Progress
        </span>
      );
    case InvoiceStatus.failed:
      return (
        <span className="rounded-full px-2 py-1 text-sm bg-red-100 text-red-600 font-semibold">
          Failed
        </span>
      );
    case InvoiceStatus.canceled:
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

export const InvoiceCard = (props: { invoice: InvoiceData }) => {
  const { invoice } = props;
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Invoice Details
        </h3>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {invoice?.id}
            </dd>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Status</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <InvoiceStatusIndicator status={invoice?.status} />
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Cost</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {`$${invoice?.amount ? invoice.amount / 100 : "~"}`}
            </dd>
          </div>

          <div className="py-4 sm:py-5 sm:flex sm:justify-items-center sm:gap-4 sm:px-6">
            <button
              type="button"
              onClick={() => window.open(invoice?.file, "_blank")}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
            >
              View
            </button>
            {invoice?.status === InvoiceStatus.open && (
              <button
                type="button"
                onClick={() => window.open(invoice?.payUrl, "_blank")}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-primary hover:bg-brand-accent1h focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
              >
                Pay
              </button>
            )}
          </div>
        </dl>
      </div>
    </div>
  );
};
