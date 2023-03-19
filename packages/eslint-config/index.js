const { isPackageExists } = require('local-pkg')

const Tailwindcss = isPackageExists('tailwindcss')

const extendsList = [
  './vue/index.js',
  './react/index.js',
  './json/index.js',
  './yaml/index.js',
  './markdown/index.js'
]

if (Tailwindcss)
  extendsList.push('./tailwindcss/index.js')

module.exports = {
  extends: extendsList
}
