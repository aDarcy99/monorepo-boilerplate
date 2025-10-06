import dts from "vite-plugin-dts";
import { defineConfig } from "vite";
import { makeViteBase } from "../../vite.base";

export default defineConfig(({ mode }) => {
  const base = makeViteBase(mode as "development" | "production");

  return {
    ...base,
    plugins: [
      ...(base.plugins ?? []),
      dts({
        tsconfigPath: "./tsconfig.json",
      }),
    ],
    build: {
      ...base.build,

      emptyOutDir: false,

      // Library entry and output settings
      lib: {
        entry: {
          index: "./src/index.ts",
          utilities: "./src/utilities/index.ts",
          icons: "./src/assets/icons/index.ts",
        },
        formats: ["cjs", "es"],
        fileName: (format, entryName) =>
          entryName === "index"
            ? `index.${format}.js`
            : `${entryName}/index.${format}.js`,
        cssFileName: "index",
      },
      rollupOptions: {
        // Let the consuming application provide these externals
        external: ["react", "react-dom", "react/jsx-runtime"],
      },
    },
  };
});
