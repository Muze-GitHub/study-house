# webpack-i18n-loader-demo

这是一个自定义 webpack i18n-loader 和 plugin 的演示。

## 目录结构

```
webpack/
  ├── i18n-loader.js         # 自定义 loader
  ├── my-demo-plugin.js      # 自定义 plugin
  ├── i18n/
  │   ├── zh-CN.json         # 中文翻译
  │   └── en-US.json         # 英文翻译
  ├── webpack.config.js      # 配置文件
  ├── package.json           # 项目依赖
  └── src/
      └── index.js           # 入口文件
```

## loader 作用

`i18n-loader.js` 会将源码中所有 `__('key')` 替换为对应语言的翻译文本。

## plugin 作用

`plugins/my-demo-plugin.js` 是一个自定义 webpack 插件，演示了 plugin 能做 loader 做不到的事情：

- **监听构建生命周期**：在编译开始、emit 阶段、构建结束等不同阶段执行自定义逻辑。
- **操作输出资源**：不仅可以生成新文件，还可以读取、修改、删除所有输出资源。
- **访问和操作 webpack 内部对象**：如 compilation、compiler、stats 等。
- **与 loader 不同**：loader 只能处理单个文件内容，plugin 可以影响整个构建流程和所有资源。

### 本 demo 的 plugin 做了什么？

1. **编译开始时输出提示**（compile 阶段）
2. **emit 阶段自动生成一个 my-demo.txt 文件**
3. **构建结束后输出所有输出文件名**（done 阶段）

### 如何使用自定义 plugin

1. 在 `webpack.config.js` 中引入并添加到 `plugins` 数组：
   ```js
   const MyDemoPlugin = require('./plugins/my-demo-plugin')
   plugins: [new MyDemoPlugin()]
   ```
2. 构建后在 `dist/` 目录下会看到 `my-demo.txt`，并在控制台看到构建阶段的提示和输出文件列表。

`plugins/progress-plugin-demo.js` 是一个自定义的进度插件，模拟了 webpack 构建过程中的进度输出。

- **实时输出构建进度百分比**：在构建过程中不断在终端输出进度。
- **构建完成后输出提示**。
- 这种全局进度提示是 loader 无法实现的，只有 plugin 能监听和操作整个构建流程。

### 如何使用 ProgressPluginDemo

1. 在 `webpack.config.js` 中引入并添加到 `plugins` 数组：
   ```js
   const ProgressPluginDemo = require('./plugins/progress-plugin-demo')
   plugins: [new ProgressPluginDemo()]
   ```
2. 构建时会在终端看到进度百分比和完成提示。

## 常见的 webpack plugin

| plugin 名称                | 作用说明                             |
| -------------------------- | ------------------------------------ |
| HtmlWebpackPlugin          | 自动生成 HTML 文件并注入打包资源     |
| DefinePlugin               | 定义全局常量（如环境变量）           |
| CleanWebpackPlugin         | 构建前自动清理输出目录               |
| MiniCssExtractPlugin       | 抽离 CSS 到单独文件                  |
| CopyWebpackPlugin          | 拷贝静态资源到输出目录               |
| BannerPlugin               | 给每个输出文件头部加注释             |
| ProvidePlugin              | 自动加载模块（如全局引入 jQuery 等） |
| HotModuleReplacementPlugin | 启用热更新                           |
| ProgressPlugin             | 显示构建进度                         |

## 如何运行

1. 安装依赖：
   ```bash
   npm install
   ```
2. 构建项目：
   ```bash
   npm run build
   ```
3. 查看 `dist/` 目录，会看到：
   - `bundle.js`（主输出文件）
   - `my-demo.txt`（由自定义 plugin 生成）

## 1. loader 能做什么？

loader 的本质是"对资源文件进行转换"，它可以：
转换文件内容（如把 TypeScript 转成 JavaScript）
处理样式（如把 Less/Sass 转成 CSS）
优化图片（如压缩图片、转 base64）
注入代码（如自动加上头部注释、插入环境变量）
静态分析（如提取依赖、自动生成文档）
甚至可以生成多个文件（如提取 CSS 到单独文件）
一句话：loader 可以对任何类型的资源做任意的处理，只要你能用 JS 实现！

## 2. 常用的 webpack loader 列表

| loader 名称             | 作用说明                              |
| ----------------------- | ------------------------------------- |
| babel-loader            | 把 ES6+ 代码转成 ES5                  |
| css-loader              | 让 webpack 能 import CSS 文件         |
| style-loader            | 把 CSS 代码插入到 <style> 标签        |
| file-loader             | 处理图片、字体等资源文件，输出到目录  |
| url-loader              | 小文件转 base64，大文件走 file-loader |
| sass-loader/less-loader | 预处理 Sass/Less 文件为 CSS           |
| ts-loader               | 处理 TypeScript 文件                  |
| postcss-loader          | 用 PostCSS 处理 CSS（如自动加前缀）   |
| json-loader             | 让你 import JSON 文件                 |
| svg-inline-loader       | 把 SVG 变成内联代码                   |
