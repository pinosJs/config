module.exports = {
  overrides: [
    {
      files: ['*.wxml'],
      rules: {
        'wxml/event-binding-style': ['error', 'colon'], // 事件绑定的style
        'wxml/empty-tag-self-closing': 'error',
        'wxml/no-const-and-let-in-wxs': 'error',
        'wxml/no-dot-this-in-wx-key': 'error',
        'wxml/no-duplicate-attributes': 'error',
        'wxml/no-unexpected-string-bool': 'error',
        'wxml/no-vue-directive': 'error',
        'wxml/no-wx-for-with-wx-else': 'error',
        'wxml/no-wx-if-string': 'error',
        'wxml/omit-bool-attributes': 'error',
        'wxml/quotes': ['error', 'double'],
        'wxml/wx-key': 'error',
        'wxml/wxs-module-prop': 'error',
        'wxml/wxs-must-be-top-level': 'error'
      },
      plugins: ['wxml'],
      processor: 'wxml/wxml',
      parser: '@wxml/parser'
    }
  ]
}
