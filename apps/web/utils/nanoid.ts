import { nanoid, customAlphabet } from "nanoid";

export const genHexCode = customAlphabet("abcdefABCDEF123456", 6);
