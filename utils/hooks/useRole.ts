import useSWR from "swr";

const useRole = () => {
  const { data, error, mutate } = useSWR("/api/getRole");
  console.log("useRole: ", data, error);
  return {
    role: data?.role as string,
    isLoading: !error && (!data as boolean),
    error,
    mutate,
  };
};

export { useRole };
