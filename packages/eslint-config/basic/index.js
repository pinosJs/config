module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended'
  ],
  plugins: ['unicorn', 'html'],
  ignorePatterns: [
    '**/node_modules/**',
    '**/dist/**',
    '*.min.*',
    'CHANGELOG.md',
    'LICENSE*',
    '**/coverage/**',
    '**/temp/**',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vitepress',
    '!.vscode',
    '!.*.js',
    '!.*.mjs',
    '!.*.cjs'
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.mjs']
      }
    }
  },
  rules: {
    // comments
    'eslint-comments/disable-enable-pair': 'off',

    // standard 对 eslint 的默认配置。详细地址：https://github.com/standard/eslint-config-standard/blob/master/.eslintrc.json
    // 详细配置的地址：https://eslint.org/docs/latest/rules/camelcase#options
    'curly': ['error', 'multi-or-nest', 'consistent'], // 对于多行和嵌套的控制语句强制使用一致的大括号样式
    'quote-props': ['error', 'consistent-as-needed'], // 对象文字属性名称周围加上引号（如果有一个要加上引号，则该对象所有的key都要加上引号）
    'no-param-reassign': 'off', // 允许对函数参数的重新赋值
    'no-cond-assign': ['error', 'always'], // 不允许在条件表达式中使用赋值运算符
    'no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement'
    ], // 禁止指定的js语法
    'no-return-await': 'error', // 禁止不必要的return await
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ], // 函数括号之前是否需要空格（匿名函数表达式和命名函数表达式不需要空格，箭头删除需要加空格）
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }], // 文件开头不允许有空行，文件末尾需要空行，最大的空行数为1
    'no-var': 'error', // 不允许var
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true
      }
    ], // 对 const 做限制
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ], // 对箭头函数的回调做限制
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true
      }
    ], // 对对象字面量使用简写语法
    'prefer-rest-params': 'error', // 在函数中想要访问 arguments变量，不能直接访问，必须通过 foo(...args) 或 foo(arguments) 形式才能访问
    'prefer-spread': 'error', // 对 apply 的使用做校验
    'prefer-template': 'error', // 在用符号链接凭借字符串时，首选字符串模板
    'template-curly-spacing': 'error', // 禁止模板字符串的嵌入表达式周围有空格
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }], // 箭头函数的参数可以省略的地方不强制执行任何括号
    'sort-imports': 'off', // 所有导入声明并验证所有导入首先按使用的成员sort-imports语法排序，然后按第一个成员或别名的字母顺序排序, import 排序交由 eslint-plugin-import 处理
    'block-scoped-var': 'error', // 在定义的范围内强制使用变量
    'consistent-return': 'off', // 对return的返回做限制
    'complexity': 'off', // 关闭复杂度的限制
    'no-alert': 'warn', // 使用 alert， confirm， prompt 发出警告
    'no-useless-escape': 'off', // 关闭禁止不必要的转义字符
    'require-await': 'off', // 关闭禁止没有await表达式的异步函数
    'no-nested-ternary': 'off', // 关闭eslint对嵌套三元运算符的判定，以 unicorn 的 no-nested-ternary 为准
    'array-bracket-newline': ['error', 'consistent'], // 数组[]换行
    'array-element-newline': ['error', 'consistent'], // 数组元素换行
    'no-new-func': 'off', // 允许使用new Function
    'prefer-promise-reject-errors': 'off', // 允许使用自定义错误信息

    // n
    'n/no-callback-literal': 'off',

    // import
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type'
        ],
        'pathGroups': [{
          pattern: '@/**',
          group: 'external',
          position: 'after'
        }],
        'pathGroupsExcludedImportTypes': ['builtin', 'external', 'object', 'type'],
        'newlines-between': 'ignore',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true
        },
        'warnOnUnassignedImports': false
      }
    ], // 在模块导入顺序中强制执行约定, 规则为 node 原生模块（path, fs） -> 第三房模块（lodash） -> 内部模块（src/xx） -> 相对父级目录（../parentDir）->相对兄弟目录（./dir）-> "index" of the current directory (./) => "object"-imports (only available in TypeScript) eg: import log = console.log; -> 引入 type
    'import/first': 'error', // 确保所有导入出现在其他语句之前
    'import/no-mutable-exports': 'error', // 禁止使用 var 或 let 使用可变导出
    'import/no-unresolved': 'off', // 确保导入指向可以解析的文件/模块
    'import/no-absolute-path': 'off',
    'import/exports-last': 'error', // export 文件必须放最后
    'import/newline-after-import': ['error', { count: 1 }], // 导入文件后必须空两行

    // unicorn
    'unicorn/escape-case': 'error', // 需要转义序列才能使用大写值
    'unicorn/consistent-function-scoping': 'off', // 将函数定义尽可能的移动到最高范围
    'unicorn/empty-brace-spaces': 'error', // 大括号之间不能有空格（待验证，可能会有冲突）
    'unicorn/error-message': 'error', // 创建一个错误时必须传值
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
        ignore: [
          '^App\\.vue$'
        ]
      }
    ], // 以该文件形式创建文件foo-bar.js
    'unicorn/no-instanceof-array': 'error', // Require Array.isArray() instead of instanceof Array.
    'unicorn/no-invalid-remove-event-listener': 'error', // EventTarget#removeEventListener()防止使用表达式的结果进行调用
    'unicorn/no-nested-ternary': 'error', // 规范嵌套三元运算符的使用
    'unicorn/no-process-exit': 'off', // This rule is an extension to ESLint's no-process-exit rule, that allows process.exit() to be called in files that start with a hashbang → #!/usr/bin/env node. It also allows process.exit() to be called in process.on('<event>', func) event handlers and in files that imports worker_threads
    'unicorn/no-unreadable-array-destructuring': 'error', // 禁止不可读的数组的解构
    'unicorn/no-unreadable-iife': 'error',
    'unicorn/no-unsafe-regex': 'off', // 禁止不安全的正则
    'unicorn/no-useless-fallback-in-spread': 'off', // 在对象文字中传播时禁止无用的回退
    'unicorn/no-useless-length-check': 'error', // 禁止无用的长度校验
    'unicorn/no-useless-promise-resolve-reject': 'off', // 禁止无用的 promise-resolve-reject
    'unicorn/no-useless-switch-case': 'error', // 禁用无效的switch
    'unicorn/no-useless-undefined': 'error', // 禁用无效的undefined
    'unicorn/relative-url-style': 'error', // 限制new Url的样式
    'unicorn/require-array-join-separator': 'error',
    'unicorn/require-number-to-fixed-digits-argument': 'error',
    'unicorn/text-encoding-identifier-case': 'error', // 规范编码格式
    // unicorn prefer 规范写法
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-flat': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-array-some': 'error',
    // TODO: Enable this by default when targeting a Node.js version that supports `Array#at`.
    'unicorn/prefer-at': 'off',
    'unicorn/prefer-code-point': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-default-parameters': 'error',
    'unicorn/prefer-dom-node-append': 'error',
    'unicorn/prefer-dom-node-dataset': 'off',
    'unicorn/prefer-dom-node-remove': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',
    // TODO: Enable this by default when targeting Node.js 16.
    'unicorn/prefer-event-target': 'off',
    'unicorn/prefer-export-from': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-json-parse-buffer': 'off',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-logical-operator-over-ternary': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-modern-math-apis': 'error',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-native-coercion-functions': 'off',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-object-from-entries': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-prototype-methods': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-regexp-test': 'error',
    'unicorn/prefer-set-has': 'error',
    'unicorn/prefer-spread': 'off',
    // TODO: Enable this by default when targeting Node.js 16.
    'unicorn/prefer-string-replace-all': 'off',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-switch': 'error',
    'unicorn/prefer-ternary': 'off',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/prefer-type-error': 'error'
  }
}
