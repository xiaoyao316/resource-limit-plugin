# resource-limit-plugin
禁止指定资源在应用中被引用

# vite-exclude-style-plugin
#### 简介
vite 构建 css 时，排除不必要的样式代码。暂时默认根据 `build.rollupOptions.externa` 配置去排除。

> 在使用 vite 构建第三方组建库时, 如果遇到打包结果中多了很多非必要的样式, 可以选择本插件。

#### 使用
```javascript



import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'
import { viteExcludeStylePlugin } from 'vite-exclude-style-plugin'

export default defineConfig({
  plugins: [
    vue(),
    ElementPlus(),
    viteExcludeStylePlugin()  
  ]
})
```

#### TODO
1. 排除文件可配置
