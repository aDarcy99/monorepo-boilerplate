import path from "path";

export const swaggerConfig = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Monorepo Boilerplate",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:2999",
      },
    ],
  },
  apis: [path.join(process.cwd(), "**/*.route.ts")],
};
