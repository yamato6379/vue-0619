// @ts-check
import baseConfig from "@chofufestival/linter-rules/eslint";

import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "vue/multi-word-component-names": "off"
  }
})
  .remove("nuxt/typescript/setup") // @chofufestival/linter-rules/eslintとコンフリクトする
  .prepend(baseConfig);
