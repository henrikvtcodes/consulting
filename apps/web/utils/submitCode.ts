import { useApiClient, client } from "./hooks/useApiClient";

export type SubmitCodeReturnType = {
  isValid: boolean;
  message: string;
  status: number;
};

const validateCode = async (code: string): Promise<SubmitCodeReturnType> => {
  const result = await client
    .get(`invite/validate/${code}`)
    .json<SubmitCodeReturnType>();

  return {
    isValid: result.isValid,
    message: result.message,
    status: result.status,
  };
};

export { validateCode };
