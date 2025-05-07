class ProgressPluginDemo {
  apply(compiler) {
    compiler.hooks.compilation.tap('ProgressPluginDemo', (compilation) => {
      let lastPercent = 0
      compilation.hooks.buildModule.tap('ProgressPluginDemo', (module) => {
        // 这里只是模拟进度，真实进度需要统计所有模块
        lastPercent += 5
        if (lastPercent > 100) lastPercent = 100
        process.stdout.write(`\rProgressPluginDemo: 构建进度 ${lastPercent}%`)
      })
    })
    compiler.hooks.done.tap('ProgressPluginDemo', () => {
      process.stdout.write('\nProgressPluginDemo: 构建完成！\n')
    })
  }
}

module.exports = ProgressPluginDemo
