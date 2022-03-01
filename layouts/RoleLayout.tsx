import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

type RoleLayoutProps = {
  roles: string[];
  children: React.ReactElement;
};

const RoleLayout = (props: RoleLayoutProps) => {
  const router = useRouter();

  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      console.log("User not logged in");
      setTimeout(() => {
        router.push("/auth/sign-in");
      }, 10000);
    } else if (status === "authenticated") {
      const roleReq = axios("/api/getRole");
      roleReq.then((res) => {
        const role = res.data.role;
        console.log(`User Role: ${role}`);

        if (!props.roles.includes(role)) {
          setTimeout(() => {
            router.push("/auth");
          }, 5000);
        }
      });
    }
  }, [router, status, session, props.roles]);

  return <div>{props.children}</div>;
};

export { RoleLayout };
