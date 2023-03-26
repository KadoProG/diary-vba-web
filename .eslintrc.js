module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "next/core-web-vitals",
    "prettier"
  ],
  plugins: ["@typescript-eslint", "react"],
  rules: {
    "no-console": ["warn", { allow: ["info", "warn", "error"] }],
    "react-hooks/exhaustive-deps": "off"
  }
}