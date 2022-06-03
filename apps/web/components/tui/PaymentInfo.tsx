import useSWRImmutable from "swr/immutable";
import { CustomerExists } from "types";
import { useCustomer } from "~utils/hooks/useCustomer";
import { useApiClient } from "~utils/hooks/useApiClient";
import { useRouter } from "next/router";

const PaymentInfo = () => {
  const { customer, update, isValidating } = useCustomer();

  const { data: customerState, mutate: mutateExists } =
    useSWRImmutable<CustomerExists>("customer/exists");

  const client = useApiClient();

  const getPortal = () => {
    const result = client.post("stripe/createPortalSession", {
      body: JSON.stringify({
        url: window.location.href,
      }),
    });

    result.then((res) => {
      res.json().then((data) => {
        window.open(data.url, "_blank");
        mutateExists();
      });
    });
  };

  return (
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Billing Information
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Processed securely by Stripe.
        </p>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2 flex flex-col align-middle">
        {customerState?.exists ? undefined : (
          <div className="self-center w-max flex flex-col justify-around">
            <p className="text-sm text-center text-gray-500 italic">
              You are not a registered customer.
            </p>
            <button
              onClick={getPortal}
              className="mt-2 inline-flex justify-center py-1 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand-primary hover:bg-brand-accent1h focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent2h"
            >
              Register a payment method
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export { PaymentInfo };
