import axios from "axios";

const submitCode = (formData: any) => {
  const code: string = formData.code;

  const result = axios.post("/api/verifyCode", { code });

  result.then((response) => {});
};

export { submitCode };
