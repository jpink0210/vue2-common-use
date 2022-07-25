
如何客觀設定 git

```
vue.config.js
    transpileDependencies: [/node_modules[/\\\\]vue2-common[/\\\\]/],
    .set(
        "common.components",
        "@/../node_modules/vue2-common/src/components"
    )

package.json
devDependencies
    "vue2-common": "git+ssh:git@github.com:jpink0210/vue2-common.git",
```