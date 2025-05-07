const fs = require('fs')
const path = require('path')

module.exports = function (source) {
  // 获取 loader 参数
  const options = this.getOptions ? this.getOptions() : { lang: 'zh-CN' }
  const lang = options.lang || 'zh-CN'

  // 读取对应语言的 JSON 文件
  const i18nPath = path.resolve(__dirname, 'i18n', `${lang}.json`)
  let i18nMap = {}
  if (fs.existsSync(i18nPath)) {
    i18nMap = JSON.parse(fs.readFileSync(i18nPath, 'utf-8'))
  }

  // 替换所有 __('key') 为翻译文本
  const result = source.replace(/__\(['"](.+?)['"]\)/g, (match, key) => {
    if (i18nMap[key]) {
      return `'${i18nMap[key]}'`
    }
    return match
  })

  return result
}
