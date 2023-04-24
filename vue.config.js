const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  transpileDependencies: [/node_modules[/\\\\]vue2-common[/\\\\]/],
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets',resolve('src/assets'))
      .set('router',resolve('src/route/router'))
      .set('components',resolve('src/components'))
      .set('scss',resolve('src/scss'))
      .set('public',resolve('src/public'))
      .set('utility',resolve('src/utility'))
      .set('pages',resolve('src/pages'))
      .set(
        "common.components",
        "@/../node_modules/vue2-common/src/components"
      )
      .set("common.styles", "@/../node_modules/vue2-common/src/scss")
      .set('@vue2-common', '@/../node_modules/vue2-common/src')
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import 'common.styles/global.variables.scss';
        `
      }
    }
  },
  lintOnSave: false
}