## 实现效果

用 JavaScript 和 CSS3 实现拖动滑块时，实时调整图片的内边距、模糊度、背景颜色，同时标题中 JS 两字的颜色也随图片背景颜色而变化。

## 涉及特性

- `:root`
- `var(--xxx)`：CSS变量
- `filter: blur()`
- 事件`change`、`mousemove`
- `data-*`属性，使用dataset可以获取，返回`NodeList`，可用的方法少于`Array`

## 基础知识

HTML5 中的自定义数据属性`dataset`

HTML5 中可以为元素添加非标准的自定义属性，只需要加上`data-`前缀，可以随便添加和命名。添加之后，可以通过元素的`dataset`属性来访问这些值，`dataset` 的值是`DOMStringMap`的一个实例化对象，其中包含之前所设定的自定义属性的“名-值”对。

## 解决难点

1. 如何处理参数值（一个有px、另一个没有）
   运用`dataset`存储后缀，有px后缀的标签中设置`<input data-sizing: px>`：

```javascript
<input type="range" name="blur" min="0" max="25" value="10" data-sizing="px">
<input type="color" name="base" value="#8aa8af">
```

JS中通过`dataset.sizing`来获取后缀值：

```javascript
const suffix = this.dataset.sizing || "";
```

此时 suffix 获取到的值，针对颜色为空，而针对长度类的则为 'px'。

2. 如何利用JS更改CSS属性值？
   在 JavaScript 中`document.documentElement`即代表文档根元素。所以要改变全局的 CSS 变量，可以这样写：

```javascript
document.documentElement.style.setProperty("--base", "#fff");
```
