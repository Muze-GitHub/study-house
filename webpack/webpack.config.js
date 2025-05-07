const path = require('path')

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
            loader: path.resolve(__dirname, 'i18n-loader.js'),
            // options: { lang: 'zh-CN' }
            options: {
              lang: 'en-US'
            }
          }
        ]
      }
    ]
  },
  mode: 'development'
}
