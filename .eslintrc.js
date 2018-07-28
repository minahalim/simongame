const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  plugins: ['react', 'import', 'jest'],
  settings: {
    'import/parser': 'babel-eslint',
    'import/resolver': {
      alias: [['#', path.resolve(path.join(__dirname, './src'))]]
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  globals: {
    __DEBUG__: true,
    __DISABLE_SSR__: true,
    __DEVELOPMENT__: true,
    __DEVTOOLS__: true,
    __TEST__: true,
    __CLIENT__: true,
    __TV__: true,
    __HISTORY_TYPE__: true,
    webpackIsomorphicTools: true,
    expect: true,
    jest: true,
    require: true,
    __dirname: true,
    process: true,
    document: true,
    module: true,
    window: true,
    console: true,
    setTimeout: true,
    Promise: true,
    setInterval: true,
    clearInterval: true
  },
  rules: {
    semi: 2,
    'newline-after-var': 2,
    'newline-before-return': 2,
    'no-empty': [2, { allowEmptyCatch: true }],
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'no-unused-expressions': 2,
    'require-await': 2,
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': 'error',
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'arrow-spacing': 'error',
    'block-scoped-var': 'error',
    'comma-spacing': 'error',
    'consistent-return': 'error',
    'constructor-super': 'error',
    'default-case': ['error', { commentPattern: '^no default$' }],
    'dot-location': ['error', 'property'],
    'dot-notation': ['error', { allowKeywords: true }],
    'eol-last': 'error',
    'generator-star-spacing': ['error', { before: false, after: true }],
    'guard-for-in': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'max-len': ['error', 400, 2],
    'no-await-in-loop': 'error',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-else-return': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-extra-semi': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': ['error', { exceptions: [] }],
    'no-implied-eval': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': ['error', { exceptions: { Property: false } }],
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': ['error', { props: false }],
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-globals': ['error'],
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-spaced-func': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unexpected-multiline': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-labels': 'error',
    'no-unused-vars': ['error'],
    'no-use-before-define': ['error'],
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'prefer-const': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'semi-style': 'error',
    'space-before-blocks': 'error',
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'switch-colon-spacing': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'use-isnan': 'error',
    'valid-typeof': ['error', { requireStringLiterals: false }],
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],
    'yield-star-spacing': ['error', 'after'],
    curly: ['error', 'all'],
    eqeqeq: ['error', 'always'],
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    radix: 'error',
    yoda: 'error',

    'padding-line-between-statements': [
      2,
      { blankLine: 'always', prev: '*', next: ['const', 'let'] },
      { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
      { blankLine: 'always', prev: 'multiline-block-like', next: 'function' },
      { blankLine: 'always', prev: 'multiline-block-like', next: 'multiline-block-like' },
      { blankLine: 'always', prev: 'block-like', next: 'block-like' },
      { blankLine: 'always', prev: '*', next: 'class' },
      { blankLine: 'always', prev: 'class', next: '*' },
      { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'multiline-block-like' },
      { blankLine: 'always', prev: '*', next: 'default' },
      { blankLine: 'never', prev: '*', next: 'case' },
      { blankLine: 'always', prev: '*', next: 'function' }
    ],

    'react/default-props-match-prop-types': 2,
    'react/jsx-boolean-value': 2,
    'react/jsx-sort-default-props': 2,
    'react/jsx-sort-props': 2,
    'react/no-children-prop': 2,
    'react/no-unused-prop-types': 2,
    'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
    'react/prop-types': 2,
    'react/sort-prop-types': 2,

    'import/no-unresolved': [2, { commonjs: true }],
    'import/order': [2, { 'newlines-between': 'always' }],
    'import/extensions': [
      2,
      'never',
      {
        scss: 'always',
        json: 'always'
      }
    ],

    'jest/no-disabled-tests': 2,
    'jest/no-focused-tests': 2,
    'jest/no-identical-title': 2,
    'jest/prefer-to-be-null': 2,
    'jest/prefer-to-be-undefined': 2,
    'jest/prefer-to-have-length': 2,
    'jest/valid-expect': 2
  },
  overrides: [
    {
      files: '**/src/**',
      rules: {
        'no-console': [2, { allow: ['info', 'debug', 'error', 'warn'] }]
      }
    }
  ]
};
