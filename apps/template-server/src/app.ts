import express from "express";
// Config
import { env } from "./config/env.config";
// Functions
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
// Middleware
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
// Routes
import healthCheckRouter from "./features/healthcheck/healthcheck.route";
import { swaggerConfig } from "./config/swagger.config";

const main = async () => {
  const PORT = env.PORT;
  const app = express();

  // Middleware
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(helmet());
  app.use(cors({ credentials: true, origin: env.CORS_ORIGIN }));

  if (env["NODE_ENV"] === "development") {
  const swaggerSpec = swaggerJSDoc(swaggerConfig);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
  }

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
