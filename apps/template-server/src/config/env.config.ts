import dotenv from "dotenv";

dotenv.config();

type TEnv = {
  NODE_ENV: string;
  PORT: string;
  HOST: string;

  CORS_ORIGIN: string;

  isDevelopment: boolean;
  isProduction: boolean;
};

export const env: TEnv = {
  ...(process.env as any),
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
};
