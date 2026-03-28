## 相关知识

DOM事件传播 = 三阶段模型

```
捕获阶段（capturing）
    ↓
目标阶段（target）
    ↓
冒泡阶段（bubbling）
```

默认写的监听器不会在捕获阶段触发，从`window`一路往下到目标元素

阻止冒泡

```javascript
child.addEventListener("click", (e) => {
  e.stopPropagation();
});
```
