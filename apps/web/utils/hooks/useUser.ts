import { useSession } from "next-auth/react";
import useSWR from "swr";

import { API_URL } from "~utils/config";

export const useUser = () => {
  const {
    data: user,
    error,
    mutate: mutateSession,
  } = useSWR(`${API_URL}/user`);

  const signOut = () => mutateSession();

  if (error) {
    return {
      user: null,
      signOut,
    };
  }

  return {
    user: user?.data,
    signOut,
  };
};
