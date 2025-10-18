import dotenv from "dotenv";
import fs from "fs";
import path from "path";

const localEnvironmentPath = path.resolve(process.cwd(), ".env.local");

const doesLocalEnvironmentExist = fs.existsSync(localEnvironmentPath);

if (doesLocalEnvironmentExist) {
  dotenv.config({ path: localEnvironmentPath });
}

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
