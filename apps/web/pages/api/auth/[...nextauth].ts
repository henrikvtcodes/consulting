import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "utils/Prisma";

console.log("\n\n");
console.log("VERCEL_URL", process.env.VERCEL_URL);
console.log("NEXT PUBLIC VERCEL URL", process.env.NEXT_PUBLIC_VERCEL_URL);
console.log("\n\n");

export default NextAuth({
  // NOTE: POTENTIAL FOR TYPE ERROR
  // @ts-ignore
  adapter: PrismaAdapter(prisma),

  providers: [
    GoogleProvider({
      clientId: process.env.NEXTAUTH_GOOGLE_CLIENTID as string,
      clientSecret: process.env.NEXTAUTH_GOOGLE_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.NEXTAUTH_FACEBOOK_CLIENTID as string,
      clientSecret: process.env.NEXTAUTH_FACEBOOK_SECRET as string,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET as string,

  cookies: {
    sessionToken: {
      name:
        process.env.NODE_ENV === "production"
          ? "__Secure-next-auth.session-token"
          : "next-auth.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: true,
        domain:
          process.env.NODE_ENV === "production"
            ? process.env.NEXT_PUBLIC_VERCEL_URL
            : undefined,
      },
    },
  },

  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/error", // Error code passed in query string as ?error=
    newUser: "/auth/sign-up", // New users will be directed here on first sign in
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // const dbUser = await prisma.user.findUnique({
      //   where: {
      //     id: user.id,
      //   },
      // });

      // if (!dbUser) {
      //   return true;
      // }

      // if (dbUser.isInvited === false) {
      //   return "/auth/sign-up";
      // }

      return true;
    },
  },
});
