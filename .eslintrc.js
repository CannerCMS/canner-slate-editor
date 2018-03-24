module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:flowtype/recommended"
  ],
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true
  },
  plugins: [
    "react",
    "flowtype"
  ],
  rules: {
    "react/prop-types": 0,
    "no-implicit-coercion": 0,
    "max-len": 0
  }
};