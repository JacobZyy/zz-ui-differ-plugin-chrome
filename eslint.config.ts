import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  unocss: true,
  react: true,
}).append({
  rules: {
    'no-console': 'warn',

  },
})
