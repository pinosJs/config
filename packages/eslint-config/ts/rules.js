module.exports = {
  // import
  'import/named': 'off',

  // ts
  '@typescript-eslint/adjacent-overload-signatures': 'error', // 将重载的成员分组在一起
  '@typescript-eslint/ban-ts-comment': 'error',
  '@typescript-eslint/ban-types': 'error', // 禁用某些类型
  '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'], // 优先使用record
  '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }], // 规范类型导入样式的使用
  '@typescript-eslint/member-delimiter-style': ['error', {
    multiline: {
      delimiter: 'none',
      requireLast: false
    }
  }], // 接口和类型文字需要特定的成员分隔符样式
  /** eg
   * interface T1 {
      func: (arg: string) => number;
    }
    */
  '@typescript-eslint/method-signature-style': ['error', 'property'], // 采用的方法签名样式
  '@typescript-eslint/no-empty-interface': ['error', {
    allowSingleExtends: true
  }], // 禁止定义空接口
  '@typescript-eslint/no-extra-non-null-assertion': 'error', // 禁止额外的非空断言
  '@typescript-eslint/no-inferrable-types': 'error', // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
  '@typescript-eslint/no-misused-new': 'error', // 尝试为接口或new类定义构造函数
  '@typescript-eslint/no-unnecessary-type-constraint': 'error', // 禁止对泛型的不必要的约束
  '@typescript-eslint/prefer-as-const': 'error', // 优先使用const对常量的断言
  '@typescript-eslint/prefer-namespace-keyword': 'error', // 要求使用namespace关键字而不是module关键字来声明自定义 TypeScript 模块

  // 扩展
  'brace-style': 'off',
  '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }], // 代码块的大括号样式
  'comma-dangle': 'off',
  '@typescript-eslint/comma-dangle': ['error', {
    arrays: 'never',
    objects: 'never',
    imports: 'never',
    exports: 'never',
    functions: 'never'
  }], // 尾随逗号
  'comma-spacing': 'off',
  '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }], // 逗号前后间距
  'func-call-spacing': 'off',
  '@typescript-eslint/func-call-spacing': ['error', 'never'], // 函数调用间距
  'indent': 'off',
  '@typescript-eslint/indent': ['error', 2, {
    SwitchCase: 1,
    VariableDeclarator: 1,
    outerIIFEBody: 1,
    MemberExpression: 1,
    FunctionDeclaration: { parameters: 1, body: 1 },
    FunctionExpression: { parameters: 1, body: 1 },
    CallExpression: { arguments: 1 },
    ArrayExpression: 1,
    ObjectExpression: 1,
    ImportDeclaration: 1,
    flatTernaryExpressions: false,
    ignoreComments: false,
    ignoredNodes: ['TemplateLiteral *', 'JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
    offsetTernaryExpressions: true
  }], // 缩进
  'keyword-spacing': 'off',
  '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }], // 关键字间距
  'lines-between-class-members': 'off',
  '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
  'no-array-constructor': 'off',
  '@typescript-eslint/no-array-constructor': 'error',
  'no-dupe-class-members': 'off',
  '@typescript-eslint/no-dupe-class-members': 'error', // 禁止重复的class
  'no-empty-function': 'off',
  '@typescript-eslint/no-empty-function': 'error',
  'no-extra-semi': 'off',
  '@typescript-eslint/no-extra-semi': 'error', // 禁止不必要的分号
  'no-loss-of-precision': 'off',
  '@typescript-eslint/no-loss-of-precision': 'error', // 禁止失去精度的文字数字
  'no-redeclare': 'off',
  '@typescript-eslint/no-redeclare': ['error', { builtinGlobals: false }], // 禁止变量重新声明
  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': ['error', {
    allowShortCircuit: true,
    allowTernary: true,
    allowTaggedTemplates: true
  }], // 禁止未使用的表达式
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': ['error', {
    args: 'none',
    caughtErrors: 'none',
    ignoreRestSiblings: true,
    vars: 'all'
  }], // 禁止未使用的变量
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: false }], // 定义前不能使用
  'object-curly-spacing': 'off',
  '@typescript-eslint/object-curly-spacing': ['error', 'always'], // 在对象的大括号内强制保持一致的间距
  'quotes': 'off',
  '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }], // 引号的使用限制
  'semi': 'off',
  '@typescript-eslint/semi': ['error', 'never'], // 永远不使用分号
  'space-before-blocks': 'off',
  '@typescript-eslint/space-before-blocks': ['error', 'always'], // 在块之前强制保持一致的间距
  'space-before-function-paren': 'off',
  '@typescript-eslint/space-before-function-paren': [
    'error',
    {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }
  ], // 函数括号之前是否需要空格（匿名函数表达式和命名函数表达式不需要空格，箭头删除需要加空格）
  'space-infix-ops': 'off',
  '@typescript-eslint/space-infix-ops': 'error',

  // 默认存在的
  'constructor-super': 'off', // ts(2335) & ts(2377)
  'getter-return': 'off', // ts(2378)
  'no-const-assign': 'off', // ts(2588)
  'no-dupe-args': 'off', // ts(2300)
  'no-dupe-keys': 'off', // ts(1117)
  'no-func-assign': 'off', // ts(2539)
  'no-import-assign': 'off', // ts(2539) & ts(2540)
  'no-new-symbol': 'off', // ts(2588)
  'no-obj-calls': 'off', // ts(2349)
  'no-setter-return': 'off', // ts(2408)
  'no-this-before-super': 'off', // ts(2376)
  'no-undef': 'off', // ts(2304)
  'no-unreachable': 'off', // ts(7027)
  'no-unsafe-negation': 'off', // ts(2365) & ts(2360) & ts(2358)
  'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more
  'prefer-const': 'error', // ts provides better types with const
  'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
  'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply
  'valid-typeof': 'off' // ts(2367)
}
