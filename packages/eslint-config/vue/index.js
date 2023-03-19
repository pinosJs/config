const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')

module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    TS ? '../ts/index.js' : '../basic/index.js'
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true // 支持jsx
        }
      },
      rules: require('../ts/rules.js')
    }
  ],
  rules: {
    'vue/multi-word-component-names': 'off', // 组件名必须由多个单词组合而成
    'vue/attribute-hyphenation': 'error', // 在自定义组件的属性值必须以 xxx-xx 的格式
    'vue/component-definition-name-casing': ['error', 'PascalCase'], // 以驼峰的形式命名组件名称
    'vue/v-on-event-hyphenation': 'error', // 自定义事件的名称以 xx-xx 的形式 如：@click-left="handleClickLeft"
    'vue/component-tags-order': [
      'error',
      {
        order: [['script', 'template'], 'style']
      }
    ], // 组件的排序规则
    'vue/block-tag-newline': ['error', {
      singleline: 'always',
      multiline: 'always'
    }], // template 子元素必须换行
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      registeredComponentsOnly: true,
      ignores: []
    }], // 在template中使用组件的标签名的规范
    'vue/component-options-name-casing': ['error', 'PascalCase'], // 配置component属性组件名的规范
    'vue/custom-event-name-casing': ['error', 'camelCase'], // 自定义事件的命名规范 (这里兼容vue2的推荐写法)
    'vue/define-emits-declaration': ['error', 'type-based'], // 规范 defineEmits 的类型定义
    'vue/define-macros-order': ['error', {
      order: ['defineProps', 'defineEmits']
    }],
    'vue/define-props-declaration': 'off', // 规范 defineProps 的类型定义
    'vue/html-comment-content-spacing': ['error', 'always'], // 注释两边需要有空格
    'vue/html-comment-content-newline': ['error', {
      singleline: 'never',
      multiline: 'always'
    }], // 注释单个不换行，多个换行
    'vue/html-comment-indent': ['error', 2], // 注释缩进
    'vue/new-line-between-multi-line-property': ['error', {
      minLineOfMultilineProperty: 2
    }], // 属性间的换行
    'vue/no-duplicate-attr-inheritance': 'error', // 未设置 inheritAttrs: false 时，禁止 v-bind="$attrs" 这种的用法
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-ref-object-destructure': 'error', // 禁止ref的解构
    'vue/no-static-inline-styles': 'error', // 禁止静态的内联样式直接写在dom上
    'vue/no-useless-v-bind': 'error',
    'vue/padding-line-between-blocks': ['error', 'always'], // script template style block add padding line
    'vue/require-name-property': 'error', // component 必须传name
    'vue/v-on-function-call': 'error', // 当没有参数时，规范 v-on 绑定的方法

    // extends eslint in template
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/arrow-spacing': ['error', { before: true, after: true }], // 在template使用箭头函数的格式规范
    'vue/dot-notation': ['error', { allowKeywords: true }], // 访问对象属性的规范
    'vue/eqeqeq': ['error', 'always', { null: 'ignore' }], // === 的使用规范
    'vue/func-call-spacing': ['error', 'never'],
    'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'vue/prefer-template': 'error',
    'vue/space-in-parens': ['error', 'never'],
    'vue/template-curly-spacing': ['error', 'never'],
    'vue/array-bracket-newline': ['error', 'consistent'] // 数组【】换行
  }
}
