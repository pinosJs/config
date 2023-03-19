module.exports = {
  extends: [
    'plugin:react/recommended'
  ],
  settings: {
    react: {
      version: '17.0'
    }
  },
  rules: {
    // react
    // off
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off', // 在 jsx 中必须引入 react

    'react/destructuring-assignment': ['error', 'always'], // 推荐使用结构
    'react/no-access-state-in-setstate': 'error', // 在 setState 禁止使用 this.state
    'react/no-arrow-function-lifecycle': 'error', // 没有必要为生命周期方法使用箭头函数
    'react/no-did-mount-set-state': 'error', // 禁止在 componentDidMount 使用 setState
    'react/no-did-update-set-state': 'error',
    'react/no-unsafe': ['error'],
    'react/no-unused-prop-types': ['error'],
    'react/no-unused-state': 'error',

    // jsx
    'react/jsx-boolean-value': 'error', // 当属性设置为 boolean 时可以简写
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'], // 格式化闭合标签
    'react/jsx-closing-tag-location': 'error', // 格式化标签，eg: <Hello>marklar</Hello>
    'react/jsx-curly-newline': ['error', 'consistent'], // 大括号是否换行
    'react/jsx-curly-spacing': ['error', {
      when: 'always',
      children: true,
      allowMultiline: false,
      spacing: { objectLiterals: 'never' }
    }], // 大括号之间的空格
    'react/jsx-equals-spacing': ['error', 'never'], // 忽略符号周围的空格
    // 'react/jsx-first-prop-new-line': 'always',
    'react/jsx-indent': ['error', 2, {
      checkAttributes: true,
      indentLogicalExpressions: true
    }], // 缩进
    'react/jsx-indent-props': ['error', 2], // 属性缩进
    'react/jsx-max-props-per-line': ['error', {
      maximum: 1
    }], // 属性超过一个就换行
    'react/jsx-one-expression-per-line': ['error'],
    'react/jsx-tag-spacing': ['error'],
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line'
    }],
    'react/no-unknown-property': ['error', { ignore: ['css', 'class'] }]
  }
}
