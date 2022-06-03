import axios from "axios";
import ky from "ky";
import { API_URL } from "~utils/config";

export const useApiClient = () => {
  return ky.extend({
    prefixUrl: API_URL,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
