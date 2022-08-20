# resource-limit-plugin
> 禁止指定资源在项目指定文件（夹）里被引用

#### 参数说明
|  参数   | 数据类型  | 说明  |
|  ----  | ----  | ----  |
| folder  | String | 需要禁止资源被引入的文件（夹） |
| limit  | Array | 需要禁止引入的资源（npm 包名、文件名） |

#### 使用示例
```javascript
const path = require('path');
const { defineConfig } = require('@vue/cli-service');
const ResourceLimitPlugin = require('./resourceLimitPlugin.js');

// 示例：禁止在 src/views 内引用 jquery
module.exports = defineConfig({
	configureWebpack: config => {
		config.plugins.push(
			new ResourceLimitPlugin({
				folder: path.join(__dirname, 'src/views'),
				limit: ['jquery']
			})
		);
	}
});
```

#### 仅支持 webpack5
