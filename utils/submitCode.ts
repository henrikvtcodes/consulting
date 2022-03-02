import axios from "axios";

export type SubmitCodeReturnType = {
  isValid: boolean;
  message: string;
};

const submitCode = async (code: string): Promise<SubmitCodeReturnType> => {
  const result = await axios({
    method: "POST",
    url: `/api/invitecode/validate`,
    data: {
      code,
    },
  });
  console.log("Res:", result.data);

  return {
    isValid: result.data.isValid,
    message: result.data.message,
  };
};

export { submitCode };
