import { useSession } from "next-auth/react";
import useSWR from "swr";
import { Customer } from "types";

type ReturnUseCustomer = () => {
  customer: Customer | null;
  update: () => any;
  isValidating: boolean;
  error?: any;
};

export const useCustomer: ReturnUseCustomer = () => {
  const {
    data: customer,
    error,
    isValidating,
    mutate: mutateSession,
  } = useSWR(`customer`);

  const update = () => mutateSession();

  if (error) {
    return {
      customer: null,
      error,
      isValidating,
      update,
    };
  }

  return {
    customer: customer?.customer,
    isValidating,
    update,
  };
};
