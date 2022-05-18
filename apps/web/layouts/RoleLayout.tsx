import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import { useRole } from "utils/hooks/useRole";
import { useUser } from "~utils/hooks/useUser";

type RoleLayoutProps = {
  roles: string[];
  children?: React.ReactElement;
};

const RoleLayout = (props: RoleLayoutProps) => {
  const router = useRouter();

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.push("/auth/sign-in");
    },
  });

  const { user } = useUser();

  if (user !== undefined) {
    if (!user.isInvited) {
      router.push("/auth/sign-up");
    }

    const includes = props.roles.includes(user?.role);
    const isDefined = typeof user?.role !== "undefined";

    if (!includes && isDefined) {
      console.log("Eval: ", user?.role);
      router.push("/auth");
    }
  }

  return <>{props.children}</>;
};

export { RoleLayout };
