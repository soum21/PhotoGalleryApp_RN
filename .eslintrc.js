module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier', 'prettier/react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'react-native', 'react-hooks'],
  rules: {
    indent: ['error', 'tab'],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    quotes: ['error', 'single', {allowTemplateLiterals: true}],
    curly: 'error',
    eqeqeq: ['error', 'smart'],
    'no-var': 'error',
    'no-unused-vars': 'warn',
    'no-empty': 'off',
    'no-eval': 'error',
    'no-floating-decimal': 'error',
    'no-multi-spaces': 'error',
    camelcase: [2, {properties: 'always'}]
  }
};
