import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Each consumer (app / library) can pass `mode`
export function makeViteBase(
  mode: "development" | "production" = "development"
): UserConfig {
  const isDevelopment = mode === "development";
  console.log(`Vite mode: ${mode}`);

  return defineConfig({
    plugins: [react()],

    // Resolves imports files i.e. import "./component" -> import "./component.tsx"
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"],
    },

    // Dev: inline maps are automatic
    // Prod: emit external source maps
    build: {
      sourcemap: isDevelopment ? false : true,
      // Inline small files as Data URLs; emit bigger ones as separate files.
      assetsInlineLimit: 10000, // <10KB → base64
    },

    css: {
      // SCSS (including CSS Modules)
      // Modules only for *.module.scss + custom local class name: <fileName>-<originalClass>
      modules: {
        generateScopedName: (name, filename) => {
          const file = path.basename(filename, ".module.scss");
          return `${file}-${name}`;
        },
      },
    },
  });
}
