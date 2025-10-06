import { TPaginationOptions } from "@repo/generic-shared/types/pagination";
import { queryOptions } from "@tanstack/react-query";
import { healthCheckApi } from "../apis/healthCheck.api";

export const healthCheckKeys = {
  healthCheck: ["healthCheck"] as const,
};

export const healthCheckQueries = {
  getAll: () =>
    queryOptions({
      queryKey: healthCheckKeys.healthCheck,
      queryFn: () => healthCheckApi.getAll(),
    }),
};
