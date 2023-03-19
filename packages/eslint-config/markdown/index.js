module.exports = {
  extends: ['plugin:markdown/recommended'],
  overrides: [
    {
      files: ['**/*.md/*.*'],
      rules: {
        'unicorn/filename-case': 'off',
        'import/no-unresolved': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off'
      }
    }
  ]
}
