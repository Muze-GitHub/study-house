# Web Worker 学习笔记

## 什么是 Web Worker？

Web Worker 是 HTML5 标准的一部分，它允许在主线程之外创建独立的工作线程来执行耗时的计算任务，从而避免阻塞主线程（UI 线程）。

## Web Worker 的主要特点

1. **并行执行**：Worker 在独立线程中运行，不会阻塞主线程
2. **独立的运行环境**：Worker 线程无法访问以下内容：
   - DOM（无法直接操作页面）
   - window 对象
   - document 对象
   - parent 对象
3. **通信机制**：主线程与 Worker 之间通过消息机制（postMessage）进行通信

## 使用场景

1. 复杂数学运算
2. 大数据处理
3. 图像/视频处理
4. 实时数据分析
5. 长轮询或大量 Ajax 请求

## 基本用法

### 1. 创建 Worker

```javascript
const worker = new Worker('worker.js')
```

### 2. 消息通信

主线程发送消息：

```javascript
worker.postMessage(data)
```

Worker 线程接收消息：

```javascript
self.onmessage = function (e) {
  const data = e.data
  // 处理数据
}
```

### 3. 错误处理

```javascript
worker.onerror = function (error) {
  console.error('Worker error:', error)
}
```

### 4. 终止 Worker

```javascript
worker.terminate() // 主线程中终止
self.close() // Worker 线程中终止
```

## 注意事项

1. Worker 文件必须与主页面同源
2. 不要在 Worker 中进行 DOM 操作
3. Worker 线程的创建和销毁都有一定成本，建议适度使用
4. 数据通信时注意性能开销，避免传递过大的数据

## 示例说明

本目录包含两个示例：

1. **基础计算示例**：演示了如何使用 Worker 处理耗时的计算任务
2. **数据通信示例**：展示了主线程与 Worker 之间的消息传递

### 运行方式

1. 使用本地服务器运行 index.html（直接打开可能会有跨域问题）
2. 点击相应按钮测试不同功能
3. 观察控制台输出了解 Worker 的工作状态

## 参考资源

- [MDN Web Worker API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API)
- [掘金文章：Web Worker 从入门到实战](https://juejin.cn/post/7385758285960478759)
