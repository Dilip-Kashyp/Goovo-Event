import Axios from "axios";

export const api = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.response.use(
  (response) => {
    return response?.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.error("Error:", message);
    return Promise.reject(error);
  }
);

export function getresponseError(error) {
  const isString = typeof error?.response?.data?.message === "string";
  return {
    message: isString
      ? error?.response?.data?.message || "Internal Server Error"
      : "Internal Server Error",
  };
}
