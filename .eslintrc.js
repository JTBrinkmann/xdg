module.exports = {
  extends: 'eslint:recommended',
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  parserOptions: {
    sourceType: 'script',
    ecmaVersion: 'latest'
  },
  rules: {
    'eqeqeq': 1,
    'indent': [1, 2],
    'linebreak-style': [1, 'unix'],
    'no-alert': 1,
    'no-async-promise-executor': 0,
    'no-case-declarations': 1,
    'no-console': [1, { 'allow': ['warn', 'error'] }],
    'no-constant-condition': [1, { 'checkLoops': false }],
    'no-dupe-args': 1,
    'no-dupe-keys': 1,
    'no-else-return': 0,
    'no-empty-character-class': 0,
    'no-empty-function': 0,
    'no-empty-pattern': 0,
    'no-empty': [1, { 'allowEmptyCatch': true }],
    'no-eval': 1,
    'no-extra-bind': 1,
    'no-extra-boolean-cast': 1,
    'no-extra-label': 1,
    'no-extra-parens': 1,
    'no-extra-semi': 1,
    'no-fallthrough': 1,
    'no-floating-decimal': 1,
    'no-implicit-coercion': 1,
    'no-implicit-globals': 1,
    'no-implied-eval': 1,
    'no-inner-declarations': 1,
    'no-invalid-this': 1,
    'no-irregular-whitespace': 0,
    'no-iterator': 1,
    'no-label-var': 1,
    'no-labels': 1,
    'no-lone-blocks': 1,
    'no-loop-func': 1,
    'no-mixed-requires': 1,
    'no-multi-assign': 1,
    'no-multi-spaces': 1,
    'no-multi-str': 1,
    'no-multiple-empty-lines': 1,
    'no-native-reassign': 1,
    'no-negated-condition': 1,
    'no-new-func': 1,
    'no-new-object': 1,
    'no-new-require': 1,
    'no-new-symbol': 1,
    'no-new-wrappers': 1,
    'no-new': 1,
    'no-octal-escape': 1,
    'no-octal': 1,
    'no-path-concat': 1,
    'no-proto': 1,
    'no-prototype-builtins': 0,
    'no-redeclare': 1,
    'no-return-assign': 1,
    'no-return-await': 2,
    'no-script-url': 1,
    'no-self-assign': 1,
    'no-self-compare': 1,
    'no-sequences': 1,
    'no-shadow-restricted-names': 1,
    'no-throw-literal': 1,
    'no-undef-init': 1,
    'no-undef': 1,
    'no-unexpected-multiline': 1,
    'no-unreachable': 1,
    'no-unsafe-assignment': 0,
    'no-unsafe-call': 0,
    'no-unsafe-finally': 0,
    'no-unsafe-member-access': 0,
    'no-unsafe-negation': 0,
    'no-unsafe-optional-chaining': 0,
    'no-unsafe-return': 0,
    'no-unused-vars': [1, { 'args': 'none' }],
    'no-use-before-define': 1,
    'no-useless-catch': 0,
    'no-useless-escape': 0,
    'no-void': 1,
    'no-warning-comments': 1,
    'no-with': 1,
    'prefer-promise-reject-errors': 1,
    'quotes': [1, 'single'],
    'radix': 1,
    'rest-spread-spacing': 1,
    'semi-spacing': 1,
    'semi-style': 1,
    'semi': [1, 'always'],
    'space-before-blocks': 1,
    'space-in-parens': 1,
    'space-infix-ops': 1,
    'space-unary-ops': 1,
    'spaced-comment': 1,
    'switch-colon-spacing': 1,
    'unicode-bom': 1,
  }
};