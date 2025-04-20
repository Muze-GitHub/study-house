// Worker 线程代码
self.onmessage = function (e) {
  if (e.data === 'start') {
    // 模拟耗时计算
    let sum = 0
    for (let i = 0; i < 100000000000; i++) {
      sum += i
    }
    postMessage(sum)
  } else if (e.data.type === 'customMessage') {
    // 处理自定义消息
    console.log('Worker 收到消息:', e.data.content)
    // 发送响应回主线程
    postMessage({
      type: 'response',
      content: '收到消息：' + e.data.content
    })
  }
}

// 错误处理
self.onerror = function (error) {
  console.error('Worker 内部错误:', error)
  postMessage({
    type: 'error',
    error: error.message
  })
}
