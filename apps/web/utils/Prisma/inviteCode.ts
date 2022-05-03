import { prisma } from "./index";
import { genHexCode } from "utils/nanoid";

export async function lookupCode(code: string) {
  const token = await prisma.invite.findUnique({
    where: { token: code },
  });

  if (!token) {
    return null;
  }

  return !token.used;
}

export async function createCode(code?: string) {
  const token = code ? code : genHexCode();
  console.log("New invite code:", token);
  const newCode = await prisma.invite.create({
    data: {
      token,
    },
  });
  console.log(newCode);
  return newCode.token;
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
