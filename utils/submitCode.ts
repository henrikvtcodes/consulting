import axios from "axios";

const submitCode = (code: string) => {
  const result = axios.get("/api/invitecode", {
    data: {
      code,
    },
  });

  return result;
};

export { submitCode };
