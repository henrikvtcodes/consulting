import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "utils/Prisma";

export default NextAuth({
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

  pages: {
    signIn: "/auth/sign-in",
    signOut: "/auth/sign-out",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-email", // used for check email message
    newUser: "/auth/sign-up", // New users will be directed here on first sign in
  },
});
