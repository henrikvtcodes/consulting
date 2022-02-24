import { prisma } from "./index";
import { genHexCode } from "~utils/nanoid";

export async function lookupCode(code: string) {
  const token = await prisma.invite.findUnique({
    where: { token: code },
  });

  if (!token) {
    return null;
  }

  return !token.used;
}

export async function createCode() {
  const token = genHexCode();
  const code = await prisma.invite.create({
    data: {
      token,
    },
  });

  return code.token;
}

export async function markCodeAsUsed(code: string, usedBy: string) {
  const token = await prisma.invite.findUnique({
    where: { token: code },
  });

  if (!token) {
    return new Error("Code does not exist");
  }

  if (token.used) {
    return new Error("Code has already been used");
  }

  await prisma.invite.update({
    where: { token: code },
    data: {
      used: true,
      usedBy: usedBy,
      usedOn: new Date(),
    },
  });

  return true;
}
