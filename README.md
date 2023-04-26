# frame

### 專案基本建置

有路由、有 store by module、有 alias
可以開始工作了各位。

pages, modules(vuex, store)
route/router
utility/http, http interceptors
config alias
vue-router, vue-types, vuex
sass-loader, node-sass

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 安裝細節

### 步驟
請參照 共用元件repo.

### 如何處理要 update git repo 的問題
- how to reinstall yarn
yarn upgrade  vue2-common

### 如何快速產生page
aka 簡讀心得

- 加指令
package.json
```
"genCode:admin": "node ./src/genCode/core/gen.js --scope admin"
```

- plugins
yarn add minimist handlebars cli-color

- 設定 page path
src/genCode/util/path.js

// dir = Path.join(__dirname, '../../', `vip/${scope}/${Allow.Views}/${path}`)
dir = Path.join(__dirname, '../../', `pages/${path}`)


- 設定 route
一、這邊是你的，route 的資料夾名稱
(我這裡是錯誤示範，應該要是複數，routes/index.js)

src/genCode/util/allow.js
// Routes: 'routes',
  Routes: 'route',

二、設定 route path
src/genCode/core/appendRoute.js

// const routesDir = Path.join(__dirname, '../..', `vip/${argv.scope}/${Allow.Routes}`)
  const routesDir = Path.join(__dirname, '../..', `${Allow.Routes}`)


三、確認你 routes 資料夾下面一定有 index.js


- genCode
yarn genCode:admin  --path [pages下面的檔案夾名稱] --file index

