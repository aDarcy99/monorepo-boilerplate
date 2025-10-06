import { templateApiClient } from "../../../config/api.config";

const baseApi = templateApiClient("health-check");

export type THealthCheckApi = {
  getAll: () => Promise<string>;
};

export const healthCheckApi: THealthCheckApi = {
  getAll: async () => {
    const response = await baseApi.get("/");

    return response.data;
  },
};
