const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  pwa: {
    name: 'TODO',
    // настройки манифеста
    manifestOptions: {
      icons: []
    },
  }
}