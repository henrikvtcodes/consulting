import axios from "axios";
import { FormHTMLAttributes } from "react";

export type SubmitCodeReturnType = {
  isValid: boolean;
  message: string;
};

const validateCode = async (code: string): Promise<SubmitCodeReturnType> => {
  const result = await axios({
    method: "POST",
    url: `/api/invitecode/validate`,
    data: {
      code,
    },
  });

  return {
    isValid: result.data.isValid,
    message: result.data.message,
  };
};

const submitCode = (event: any) => {
  console.log(event);
};

export { validateCode, submitCode };
