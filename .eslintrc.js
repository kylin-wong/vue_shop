module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0,
    'no-useless-return': 0,
    'indent': 0,
    'vue/no-unused-vars': 0,
    'no-undef': 0,
    'no-trailing-spaces': 0,
    'vue/no-parsing-error': 0,
    'no-unused-vars': 0,
    'camelcase': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
