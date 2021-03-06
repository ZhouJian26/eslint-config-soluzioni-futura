module.exports = {
  extends: "eslint:recommended",
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  rules: {
    "comma-dangle": ["warn", "never"],
    "comma-spacing": ["error", { before: false, after: true }],
    indent: ["error", 2, {
      MemberExpression: 1,
      SwitchCase: 1
    }],
    "no-empty": ["error", { allowEmptyCatch: true }],
    "no-multiple-empty-lines": ["error"],
    "no-new-symbol": "error",
    "no-undef": ["error"],
    "no-unused-vars": ["warn"],
    "no-console": ["warn"],
    "object-curly-spacing": ["error", "always"],
    "object-shorthand": "error",
    "prefer-const": 2,
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "space-in-parens": ["error", "never"],
    "array-bracket-spacing": ["error", "never"],
    "space-infix-ops": ["error"],
    curly: ["error"],
    "brace-style": ["error", "1tbs", { allowSingleLine: false }],
    "keyword-spacing": ["error", { before: true, after: true }],
    "quote-props": ["error", "as-needed"],
    "arrow-spacing": ["error"],
    "space-before-blocks": ["error", "always"],
    "spaced-comment" : ["error", "always"],
    "max-len": ["error", { ignoreUrls: true }]
  }
}
