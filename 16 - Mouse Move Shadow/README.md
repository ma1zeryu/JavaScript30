## 基本知识

`text-shadow`样式为标准CSS3样式，用于添加一个或多个文字阴影，用于其的语法格式为：`text-shadow: h-shadow v-shadow blur color`

`ES6解构赋值`

```javascript
const { offsetWidth: width, offsetHeight: height } = hero;
let { offsetX: x, offsetY: y } = e;
```

```javascript
// 基本格式
const { 属性名 } = 对象;
// 重命名
const { 原属性名: 新变量名 } = 对象;
```

函数参数解构

```javascript
function shadow(e) {
  let { offsetX, offsetY } = e;
}
// 甚至可以直接;
function shadow({ offsetX, offsetY }) {
  console.log(offsetX, offsetY);
}
```

还有神秘的数组解构，默认解构等等
