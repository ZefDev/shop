const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy: 'https://api-shop-scandi.000webhostapp.com',
  }
})
