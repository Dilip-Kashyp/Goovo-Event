import { api } from "./apiHandler";
import { useMutation } from "@tanstack/react-query";

export const getEventData = () => {
  return api.get();
};

export const usegetEventData = ({ mutationConfig }) => {
  const { onSuccess, onError, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      onSuccess?.(...args);
    },
    onError: (...args) => {
      onError?.(...args);
    },
    ...restConfig,
    mutationFn: getEventData,
  });
};
