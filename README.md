# config
some general configuration of the project

## eslint-config
[document](https://github.com/pinosJs/config/tree/main/packages/eslint-config)


## stylelint-config
[document](https://github.com/pinosJs/config/tree/main/packages/stylelint-config)


## prettier-config
[document](https://github.com/pinosJs/config/tree/main/packages/prettier-config)

## vscode-config

This is the recommended configuration for vscode

- create ```extensions.json``` file in the .vscode directory
- config ```extensions.json``` file

```json
{
  "recommendations": [
    "cpylua.language-postcss",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "rohit-gohri.format-code-action",
    "streetsidesoftware.code-spell-checker",
    "stylelint.vscode-stylelint",
    "vue.volar"
  ]
}
```

- create ```settings.json``` file in the .vscode directory
- config ```settings.json``` file

```json
{
  "[css]": {
    "editor.codeActionsOnSave": [
      "source.formatDocument",
      // eslint-disable-next-line jsonc/sort-array-values
      "source.fixAll.stylelint"
    ],
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.codeActionsOnSave": [
      "source.formatDocument",
      // eslint-disable-next-line jsonc/sort-array-values
      "source.fixAll.eslint"
    ],
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[json]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[less]": {
    "editor.codeActionsOnSave": [
      "source.formatDocument",
      // eslint-disable-next-line jsonc/sort-array-values
      "source.fixAll.stylelint"
    ],
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.codeActionsOnSave": [
      "source.formatDocument",
      // eslint-disable-next-line jsonc/sort-array-values
      "source.fixAll.stylelint"
    ],
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "Vue.volar"
  },
  "cSpell.words": [
    "consola",
    "esbuild",
    "execa",
    "iife",
    "pinos",
    "stylelint",
    "tailwindcss",
    "wxml"
  ],
  "css.validate": false,
  // 保存修复
  "editor.codeActionsOnSave": [
    "source.fixAll.eslint",
    "source.fixAll.stylelint"
  ],
  "editor.formatOnPaste": true,
  // "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": false,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "json",
    "json5",
    "jsonc",
    "typescript",
    "typescriptreact",
    "wxml",
    "yaml",
    "yml"
  ],
  "files.associations": {
    "*.css": "postcss",
    "*.json": "jsonc",
    "*.wxml": "html"
  },
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "less.validate": false,
  "prettier.enable": true,
  "scss.validate": false,
  "stylelint.enable": true,
  "stylelint.validate": [
    "css",
    "less",
    "postcss",
    "scss",
    "vue"
  ],
  // 禁用 vetur
  "vetur.format.enable": false
}
```
