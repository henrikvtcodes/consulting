import { useSession } from "next-auth/react";
import useSWR from "swr";
import { User } from "types";

import { API_URL } from "~utils/config";

type ReturnUseUser = () => {
  user: User | null;
  signOut: () => any;
  error?: any;
};

export const useUser: ReturnUseUser = () => {
  const {
    data: user,
    error,
    mutate: mutateSession,
  } = useSWR(`${API_URL}/user`);

  const signOut = () => mutateSession();

  if (error) {
    return {
      user: null,
      error,
      signOut,
    };
  }

  return {
    user: user?.data,
    signOut,
  };
};
