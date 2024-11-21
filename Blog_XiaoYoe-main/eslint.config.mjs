import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
}).override('antfu/javascript/rules', {
  rules: {
    'no-console': 'off',
  },
})
