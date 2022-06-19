//const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   devServer:{
//     proxy: 'https://api-shop-scandi.000webhostapp.com',
//   }
// })

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api-shop-scandi.000webhostapp.com',
        ws: true,
        changeOrigin: true,
      }
    }
  }
}