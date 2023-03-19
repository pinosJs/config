module.exports = {
  extends: [
    '../basic/index.js',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { sourceType: 'module' },
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] }
    }
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      rules: require('./rules.js')
    }
  ],
  rules: {
    '@typescript-eslint/no-duplicate-enum-values': 'error', // 不允许重复的枚举成员值
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error', // 非非空断言可选链
    '@typescript-eslint/no-non-null-assertion': 'error', // 非非空断言
    '@typescript-eslint/no-this-alias': 'error' // 禁止将this 分配给变量
  }
}
