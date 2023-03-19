module.exports = {
  extends: ['plugin:jsonc/recommended-with-jsonc'],
  overrides: [
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/key-name-casing': 'off', // 取消key的命名规则，因为存在 editor.codeActionsOnSave 这种特殊的key
        'jsonc/no-comments': 'off', // 允许在json中使用注释
        'jsonc/sort-array-values': [
          'error',
          {
            pathPattern: '.*',
            order: { type: 'asc' }
          }
        ], // json中数组的排序
        'jsonc/sort-keys': 'error', // json中的key值排序
        'jsonc/array-bracket-newline': ['error', 'consistent'], // 数组换行的限制
        'jsonc/array-bracket-spacing': 'error', // 去掉数组两边的空格
        'jsonc/comma-dangle': 'error', // 末尾不能有逗号
        'jsonc/comma-style': 'error',
        'jsonc/indent': ['error', 2], // 缩进是两个空格
        'jsonc/key-spacing': [
          'error',
          { beforeColon: false, afterColon: true }
        ], // 对象文字属性中强制键和值之间的间距 var obj = { "foo": 42 };
        'jsonc/object-curly-newline': 'error', // 在大括号内强制使用一致的换行符
        'jsonc/object-curly-spacing': 'error', // 在大括号内强制使用一致的空格
        'jsonc/object-property-newline': 'error' // 在大括号内的对象属性强制使用一致的换行符
      }
    },
    // 对 package.json 做特殊处理
    {
      files: ['package.json', '_package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'publisher',
              'name',
              'displayName',
              'type',
              'version',
              'private',
              'packageManager',
              'description',
              'author',
              'license',
              'funding',
              'homepage',
              'repository',
              'bugs',
              'keywords',
              'categories',
              'sideEffects',
              'exports',
              'main',
              'module',
              'unpkg',
              'jsdelivr',
              'types',
              'typesVersions',
              'bin',
              'icon',
              'files',
              'publishConfig',
              'engines',
              'activationEvents',
              'contributes',
              'scripts',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'optionalDependencies',
              'devDependencies',
              'pnpm',
              'overrides',
              'resolutions',
              'husky',
              'config',
              'simple-git-hooks',
              'lint-staged',
              'eslintConfig'
            ]
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' }
          },
          {
            pathPattern: '^exports.*$',
            order: [
              'types',
              'require',
              'import'
            ]
          }
        ]
      }
    }
  ]
}
