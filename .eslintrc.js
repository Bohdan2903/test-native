module.exports = {
  root: true,
  "parser": "@typescript-eslint/parser", // Specifies the ESLint parser
  "parserOptions": {
    "ecmaVersion": 2020, // Allows for the parsing of modern ECMAScript features
    "sourceType": "module", // Allows for the use of imports
    "ecmaFeatures": {
      "jsx": true, // Allows for the parsing of JSX
    },
  },
  "settings": {
    "react": {
      "version": "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  "extends": [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  plugins: ['@typescript-eslint'],
  "rules": {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-var-requires": "off",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-key": "error",
    "no-restricted-imports": [
      "error",
      {
        "patterns": ["@mui/*/*/*", "!@mui/material/test-utils/*"],
      },
    ],
  },
};
