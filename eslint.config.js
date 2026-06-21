import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["dist/**", "build/**", "bin/**", "third_party/**", "node_modules/**"],
  },
  js.configs.recommended,
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      eqeqeq: ["error", "always", { null: "ignore" }],
      "no-unused-vars": "warn",
    },
  },
  {
    files: ["test/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.mocha,
      },
    },
    rules: {
      "no-unused-vars": "warn",
    },
  },
];
