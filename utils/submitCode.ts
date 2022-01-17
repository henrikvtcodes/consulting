import axios from "axios";

import { prisma } from "./prisma";

const submitCode = (formData: any) => {
  const code: string = formData.code;

  const result = axios.post("/api/verifyCode", { code });

  result.then((response) => {});
};

export { submitCode };
