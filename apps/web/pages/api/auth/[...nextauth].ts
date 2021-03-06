import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { PrismaClient } from "@prisma/client";
import type { PrismaClient as PrismaClientType } from "@prisma/client";
import { redirect } from "next/dist/server/api-utils";
let prisma: PrismaClientType;

// add prisma to the NodeJS global type
interface CustomNodeJsGlobal extends NodeJS.Global {
  prisma: PrismaClient;
}

// Prevent multiple instances of Prisma Client in development
declare const global: CustomNodeJsGlobal;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({
    log: ["info", "warn", "error"],
  });
} else {
  prisma =
    global.prisma ||
    new PrismaClient({
      log: ["info", "warn", "error"],
    });
}

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
            ? `dev.consulting.henrikvt.com`
            : undefined,
      },
    },
  },

  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/error", // Error display page
    newUser: "/auth/sign-up", // Invite code page
  },
});
