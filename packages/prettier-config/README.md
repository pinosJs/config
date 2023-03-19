## prettier-config

### Install

``` bash
pnpm add prettier @pinos/prettier-config -D
```

### Use

- create ```.prettierrc.cjs``` file in the project root directory
- config ```.prettierrc.cjs``` file

```js
module.exports = {
  ...require('@pinos/prettier-config')

  // The following declaration can override the default configuration above
}
```

### The default configuration is as follows:

```js
module.exports = {
  printWidth: 80,
  tableWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  bracketSameLine: false,
  proseWrap: 'preserve',
  vueIndentScriptAndStyle: false,
  endOfLine: 'lf',
  arrowParens: 'always',
  embeddedLanguageFormatting: 'auto' // v2.1.0 可用
}
```
