## stylelint-config

### Install

```shell
pnpm add stylelint postcss-html postcss @pinos/stylelint-config -D
```

**postcss >=8.0.0**

### 使用

- create ```stylelint.config.cjs``` file in the project root directory
- config ```stylelint.config.cjs``` file

```js
module.exports = {
  extends: '@pinos/stylelint-config'
}

```

### With lint-staged

add config in the package.json；

```json
{
  "lint-staged": {
    "src/**/*.{css,scss}": [
      "stylelint --fix --max-warnings 0"
    ]
  }
}
```
