import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useRole } from "utils/hooks/useRole";

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

  const { role } = useRole();

  useEffect(() => {
    const includes = props.roles.includes(role);
    const isDefined = typeof role !== "undefined";

    if (!includes && isDefined) {
      console.log("Eval: ", role);
      router.push("/auth");
    }
  }, [role, router, props.roles]);

  return <div>{props.children}</div>;
};

export { RoleLayout };
