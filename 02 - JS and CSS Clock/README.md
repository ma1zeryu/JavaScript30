## 关键要点

1. 表盘上指针的样式：旋转的效果
2. 获取实时的时间
3. 每一秒改变一次指针状态

## 涉及到的特性

- `transform-origin`：调整为围绕元素根部旋转
- `transform: rotate()`：旋转的角度
- `transition`：过渡的时间
- `transition-timing-function: cubic-bezier(x, x, x, x)`：过渡的速度曲线
- `setInterval(callback, time)`：定时执行，注意不会立刻执行，一秒后（压栈）才开始执行
- `new Date()`：获取实时时间

## bug

444°到90°会出现秒针倒转的情况
解决方案：

```javascript
if (secondsDegrees === 90) secondHand.style.transition = "all 0s";
else secondHand.style.transition = "all 0.05s";
```
