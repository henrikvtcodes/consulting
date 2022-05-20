import useSWR from "swr";

import { API_URL } from "~utils/config";

const useRole = () => {
  const { data, error, mutate } = useSWR(`user/role`);
  return {
    role: data?.role as string,
    isLoading: !error && (!data as boolean),
    error,
    mutate,
  };
};

export { useRole };
