# webpack-i18n-loader-demo

这是一个自定义 webpack i18n-loader 的演示。

## 目录结构

```
webpack/
  ├── i18n-loader.js         # 自定义 loader
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

## 如何运行

1. 安装依赖：
   ```bash
   npm install
   ```
2. 构建项目：
   ```bash
   npm run build
   ```
3. 查看 `dist/bundle.js`，你会发现：
   ```js
   console.log('你好，世界')
   console.log('你好')
   console.log(__('not_exist_key'))
   ```
   如果你想切换为英文，只需修改 `webpack.config.js` 里的 `options: { lang: 'en-US' }`。

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
