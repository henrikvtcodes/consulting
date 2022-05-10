import axios from "axios";

import { API_URL } from "./config";

export type SubmitCodeReturnType = {
  isValid: boolean;
  message: string;
  status: number;
};

const validateCode = async (code: string): Promise<SubmitCodeReturnType> => {
  const result = await axios({
    method: "GET",
    url: `${API_URL}/invite/validate/${code}`,
    withCredentials: true,
  });

  return {
    isValid: result.data.isValid,
    message: result.data.message,
    status: result.status,
  };
};

const submitCode = (event: any) => {
  console.log(event);
};

export { validateCode, submitCode };
