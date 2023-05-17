## eslint-config

### 🚀 Verify the following format files:

- js
- json
- markdown
- tailwindcss
- vue
- react
- ts
- yaml
- wxml

**eslint >=8.18.0**

### Install

```shell
pnpm add eslint @pinos/eslint-config -D
```

### Use

- create ```eslintrc.cjs``` file in the project root directory
- config ```eslintrc.cjs``` file

```js
module.exports = {
  extends: ['@pinos']
}

```

### With lint-staged

add config in the package.json；

```json
{
  "lint-staged": {
    "src/**/*.{js,cjs,mjs,jsx,vue,ts,tsx,cts,mts,json,yaml}": [
      "eslint --fix --max-warnings 0"
    ],
  }
}
```
