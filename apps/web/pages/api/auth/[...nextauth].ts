import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "utils/Prisma";

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

  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-email", // used for check email message
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