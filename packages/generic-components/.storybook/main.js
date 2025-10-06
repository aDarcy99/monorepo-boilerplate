const excludedProps = new Set([
  "id",
  "slot",
  "onCopy",
  "onCut",
  "onPaste",
  "onCompositionStart",
  "onCompositionEnd",
  "onCompositionUpdate",
  "onSelect",
  "onBeforeInput",
  "onInput",
]);

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    "@storybook/addon-webpack5-compiler-babel",
    {
      name: `@storybook/preset-scss`,
      options: {
        cssLoaderOptions: {
          modules: {
            localIdentName: "[name]__[local]--[hash:base64:5]",
          },
          esModule: false, // Ensures SCSS module exports work in Storybook (fixes `styles['root']` undefined error)
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      propFilter: (prop) =>
        !prop.name.startsWith("aria-") && !excludedProps.has(prop.name),
    },
  },
  async webpackFinal(config) {
    let rule = config.module.rules.find((rule) =>
      String(rule.test).includes(".css")
    );
    rule.use.push("lightningcss-loader");
    return config;
  },
};
export default config;
