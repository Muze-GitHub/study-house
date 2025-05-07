const path = require('path')
const ProgressPluginDemo = require('./plugins/progress-plugin-demo')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, 'loaders', 'i18n-loader.js'),
            options: {
              lang: 'en-US' // 默认语言 zh-CN
            }
          }
        ]
      }
    ]
  },
  plugins: [new ProgressPluginDemo()],
  mode: 'development'
}
