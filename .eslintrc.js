// https://docs.expo.dev/guides/using-eslint/
// prettier/prettier = error | warn
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "import/order": [
      "error",
      {
        groups: [
          "external",
          "internal",
          "builtin",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
