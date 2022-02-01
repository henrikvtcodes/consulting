import { prisma } from "./index";

export async function lookupCode(code: string) {
  const token = await prisma.invite.findUnique({
    where: { token: code },
  });

  if (!token) {
    return null;
  }

  return !token.used;
}
