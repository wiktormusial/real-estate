module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    parserOptions: {
        project: "./tsconfig.json",
    },
    rules: {
        "typescript-eslint/quotes": "off",
    },
}
