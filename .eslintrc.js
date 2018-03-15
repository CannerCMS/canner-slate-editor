module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  plugins: ["react", "flowtype", "prettier"],
  env: {
    browser: true,
    node: true
  },
  rules: {
    "new-cap": 0,
    "max-len": 0,
    "require-jsdoc": 0,
    "no-return-assign": 0,
    "no-alert": 0,
    "no-implicit-coercion": 0,
    radix: 0
  },
  parser: "babel-eslint",
  globals: {
  }
};
