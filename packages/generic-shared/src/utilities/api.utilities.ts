import axios from "axios";

export const createApiClient = (apiPath: string) => {
  return (baseUrl: string) => {
    const apiClient = axios.create({
      baseURL: `${apiPath}/${baseUrl}`,
      withCredentials: true,
    });

    return apiClient;
  };
};

// export const authenticationInterceptor = () => {
//   use(
//     (response) => response,
//     async (error) => {
//       const originalRequest = error.config;

//       const shouldAttemptRefresh =
//         error.response?.status === 401 &&
//         !originalRequest._retry &&
//         ["MISSING_TOKEN", "invalidToken", "TOKEN_EXPIRED"].includes(
//           error.response?.data?.code
//         );

//       const shouldRedirect =
//         error.response?.status === 401 &&
//         ["REFRESH_TOKEN_EXPIRED"].includes(error.response?.data?.code);

//       if (shouldRedirect) {
//         // useAuthenticationsStore.getState().setUser(null);
//       }

//       if (shouldAttemptRefresh) {
//         originalRequest._retry = true;

//         try {
//           await useAuthenticationsStore.getState().refreshAuthentication();
//           return apiClient(originalRequest);
//         } catch (err) {
//           useAuthenticationsStore.getState().setUser(null);
//           return Promise.reject(err);
//         }
//       }

//       return Promise.reject(error);
//     }
//   );
// }
