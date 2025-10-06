import express from "express";
// Config
import { env } from "./config/env.config";
// Middleware
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
// Routes
import healthCheckRouter from "./features/healthcheck/healthcheck.route";

const main = async () => {
  const PORT = env.PORT;
  const app = express();

  // Middleware
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(helmet());
  app.use(cors({ credentials: true, origin: env.CORS_ORIGIN }));

  morgan("tiny");

  // Routes
  app.use("/health-check", healthCheckRouter);

  // Error handler
  // TODO: Error handling

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
  });
};

main();
