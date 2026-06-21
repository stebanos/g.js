import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["dist/**", "build/**", "bin/**", "third_party/**", "node_modules/**"],
  },
  js.configs.recommended,
  {
    // Shared correctness + style rules for all source and test files.
    files: ["src/**/*.js", "test/**/*.js"],
    rules: {
      eqeqeq: ["error", "always", { null: "ignore" }],
      "no-unused-vars": ["warn", { caughtErrorsIgnorePattern: "^_" }],
      "no-empty": ["error", { allowEmptyCatch: true }],
      quotes: ["error", "single", { avoidEscape: true, allowTemplateLiterals: true }],
      semi: ["error", "always"],
      indent: ["error", 4],
      "space-before-function-paren": [
        "error",
        { anonymous: "always", named: "never", asyncArrow: "always" },
      ],
      "comma-dangle": ["error", "never"],
      curly: ["error", "all"],
      "block-spacing": ["error", "always"],
      "object-curly-spacing": ["error", "always"],
    },
  },
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
  },
];
