import axios from "axios";
import ky from "ky";
import { API_URL } from "~utils/config";

export const client = ky.extend({
  prefixUrl: API_URL,
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
  retry: {
    limit: 3,
    methods: ["post", "patch", "options", "head"],
    statusCodes: [500],
  },
  throwHttpErrors: true,
});

export const useApiClient = () => {
  return client;
};
