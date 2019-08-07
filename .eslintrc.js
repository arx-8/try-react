module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:jest/all",
    /** @see https://github.com/prettier/eslint-config-prettier#installation */
    "prettier/react",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "react-app",
  ],
  plugins: ["only-error"],
  rules: {
    "import/no-default-export": "error",
    "jest/lowercase-name": "off",
    "jest/prefer-inline-snapshots": "off",
    "no-console": "off",
    "no-var": "error",
    "prefer-const": "error",
    "prettier/prettier": [
      "error",
      {
        arrowParens: "always",
        semi: false,
        trailingComma: "es5",
      },
    ],
    "react/jsx-boolean-value": "error",
    // jsx pragma に @emotion/core#jsx を使っている場合、Short Syntax 使えないため
    "react/jsx-fragments": ["error", "element"],
    "react/no-access-state-in-setstate": "error",
    "react/no-array-index-key": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-unsafe": ["error", { checkAliases: true }],
    "react/prefer-stateless-function": "error",
    "react/prop-types": "off",
    "react/self-closing-comp": [
      "error",
      {
        // empty な html が必要なケースはほとんどないため
        html: false,
      },
    ],
    "react/void-dom-elements-no-children": "error",
    "require-await": "error",

    // constructor のショートハンド（メンバーの省略記法）を使いたいため
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-parameter-properties": "off",

    // React Component の書き心地がとても悪くなるため
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    "@typescript-eslint/prefer-interface": "off",

    // ホイスティングの許可
    "@typescript-eslint/no-use-before-define": "off",

    // for Widening Literal Types
    "@typescript-eslint/no-object-literal-type-assertion": "off",

    // しょうがない
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
  },
}
