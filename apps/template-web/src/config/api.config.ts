import { createApiClient } from "@repo/generic-shared/utilities/api";

const baseUrl = import.meta.env.VITE_API_URL;

export const templateApiClient = createApiClient(baseUrl);
