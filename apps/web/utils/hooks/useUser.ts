import { useSession } from "next-auth/react";
import useSWR from "swr";

export const useUser = () => {
  const session = useSession();

  const {
    data: user,
    error,
    mutate: mutateSession,
  } = useSWR("/api/auth/session");

  const signOut = () => mutateSession();

  if (session.status === "unauthenticated") {
    return {
      user: null,
      status: session.status,
      signOut,
    };
  }

  return {
    user: user?.user,
    status: session.status,
    signOut,
  };
};
