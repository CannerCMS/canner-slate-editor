module.exports = {
  extends: [
    "google",
    "plugin:react/recommended"
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true
  },
  plugins: [
    "react"
  ],
  settings: {
    react: {
      pragma: "React",  // Pragma to use, default to "React"
      version: "15.3.1"
    }
  }
};
