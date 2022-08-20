# resource-limit-plugin
> 禁止指定资源在项目指定文件（夹）里被引用

#### 使用
```javascript
const path = require('path');
const { defineConfig } = require('@vue/cli-service');
const ResourceLimitPlugin = require('./resourceLimitPlugin.js');

module.exports = defineConfig({
	configureWebpack: config => {
		config.plugins.push(
            // 禁止在 src/views 内引用 jquery
			new ResourceLimitPlugin({
				folder: path.join(__dirname, 'src/views'),
				limit: ['jquery']
			})
		);
	}
});
```
