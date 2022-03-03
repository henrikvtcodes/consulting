import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const useRole = () => {
  const { data, error, mutate } = useSWR("/api/getRole", fetcher);
  console.log("useRole: ", data, error);
  return {
    role: data?.role as string,
    isLoading: !error && (!data as boolean),
    error,
    mutate,
  };
};

export { useRole };
