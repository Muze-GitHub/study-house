class MyDemoPlugin {
  apply(compiler) {
    // 1. 在编译开始时输出提示
    compiler.hooks.compile.tap('MyDemoPlugin', (params) => {
      console.log('MyDemoPlugin: 编译开始...')
    })

    // 2. 在emit阶段，向输出目录添加一个新文件
    compiler.hooks.emit.tapAsync('MyDemoPlugin', (compilation, callback) => {
      const content = '这是 MyDemoPlugin 自动生成的文件！'
      compilation.assets['my-demo.txt'] = {
        source: () => content,
        size: () => content.length
      }
      callback()
    })

    // 3. 在构建结束后输出所有输出文件名
    compiler.hooks.done.tap('MyDemoPlugin', (stats) => {
      const assets = Object.keys(stats.compilation.assets)
      console.log('MyDemoPlugin: 输出文件列表:', assets)
    })
  }
}

module.exports = MyDemoPlugin
