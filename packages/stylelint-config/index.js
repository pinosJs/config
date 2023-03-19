module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue'
  ],
  rules: {
    // base-config
    'selector-class-pattern': '.',
    'string-quotes': 'single',
    'max-line-length': 480,
    'no-duplicate-selectors': null,
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'number',
    'no-descending-specificity': null,
    'selector-pseudo-element-no-unknown': null,

    'annotation-no-unknown': [
      true,
      {
        ignoreAnnotations: ['default', 'global']
      }
    ],

    'at-rule-no-unknown': null,
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['screen', 'theme']
      }
    ]
  }
}
