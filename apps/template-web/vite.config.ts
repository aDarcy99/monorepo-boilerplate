import { defineConfig } from "vite";
import { makeViteBase } from "../../vite.base";
import path from "path";

export default defineConfig(({ mode }) => {
  const isDevelopment = mode === "development";
  const base = makeViteBase(mode as "development" | "production");

  return {
    ...base,

    root: "src",

    envDir: "../",

    build: {
      ...base.build,
      outDir: "../dist",
      emptyOutDir: true,
    },

    server: {
      port: 3001,
      ...(isDevelopment
        ? {
            proxy: {
              "/api": {
                target: "http://localhost:2999",
                changeOrigin: true,
                rewrite: (p) => p.replace(/^\/api/, ""),
              },
            },
          }
        : undefined),
    },
  };
});
