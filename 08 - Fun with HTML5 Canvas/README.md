## 涉及特性

- 基本属性
  - `getContext()`
  - `strokeStyle`
  - `fillStyle`
  - `lineCap`
  - `lineJoin`
- 路径绘制
  - `beginPath()`
  - `lineTo()`
  - `moveTo()`

鼠标事件处理

- `mousemove`
- `mousedown`
- `mouseup`
- `mouseout`

`getContext()`获取绘图上下文

```javascript
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
```

`strokeStyle`（描边颜色）

```javascript
ctx.strokeStyle = "red";
ctx.strokeStyle = "#00ff00";
ctx.strokeStyle = "rgba(0,0,255,0.5)";
```

- 控制线条颜色
- 只影响`stroke()`绘制的内容

`fillStyle`（填充颜色）

`ctx.fillStyle = 'blue';`

- 控制填充颜色
- 用于`fill()`（如填充矩形、路径）

`lineCap`（线条末端样式）

```javascript
ctx.lineCap = "butt"; // 默认
ctx.lineCap = "round"; // 圆头
ctx.lineCap = "square"; // 方形延伸
```

`lineJoin`（线条连接处样式）

```JavaScript
ctx.lineJoin = 'miter'; // 默认
ctx.lineJoin = 'round';
ctx.lineJoin = 'bevel';
```

`beginPath()`

`ctx.beginPath()`

- 开始一条新的路径
- 清空之前的路径记录

`moveTo(x, y)`

`ctx.moveTo(100, 100)`

- 设置“起点”
- 不会画线，仅移动画笔

`lineTo(x, y)`

`ctx.lineTo(200, 200);`

- 从当前点画一条直线到`(x, y)`
- 会记录路径，但不立即绘制

`stroke()`

- 把真正的路径绘画出来

完整的流程

```javascript
ctx.beginPath(); // 1. 开始路径
ctx.moveTo(50, 50); // 2. 起点
ctx.lineTo(150, 150); // 3. 终点
ctx.stroke(); // 4. 绘制
```
