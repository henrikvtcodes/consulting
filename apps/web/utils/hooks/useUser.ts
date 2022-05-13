import { useSession } from "next-auth/react";
import useSWR from "swr";
import { User } from "types";

import { API_URL } from "~utils/config";

type ReturnUseUser = () => {
  user: User | null;
  updateUser: () => any;
  isValidating: boolean;
  error?: any;
};

export const useUser: ReturnUseUser = () => {
  const {
    data: user,
    error,
    isValidating,
    mutate: mutateSession,
  } = useSWR(`${API_URL}/user`);

  const updateUser = () => mutateSession();

  if (error) {
    return {
      user: null,
      error,
      isValidating,
      updateUser,
    };
  }

  return {
    user: user?.user,
    isValidating,
    updateUser,
  };
};
