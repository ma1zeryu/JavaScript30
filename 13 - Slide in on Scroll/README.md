## 基本知识

**防抖**：把连续高频率事件切分为“离散事件块（burst）”，每块只处理一次

```javascript
//防抖：在一段时间内频繁触发时，只让函数策略执行一次
//经典防抖实现（头触发防抖）冷却时间20ms
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    //回调函数，以后每次执行的都是这个函数
    var context = this, //保证this不变
      args = arguments; //保证参数不变
    var later = function () {
      timeout = null; //执行函数把timeout清掉
      //如果immediate=false，代表尾触发模式，每次滚动结束时触发
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout); //每次调用先清楚旧计时器（旧任务）
    timeout = setTimeout(later, wait); //创建新定时器（新任务）
    if (callNow) func.apply(context, args); //time不会阻塞接着执行程序，如果immediate=true就会直接执行这句
  };
}
```

主要是关于屏幕位置的理解，利用一些属性判断到图片此时是否已经出现了一半了，并且没有完全滑出界面

涉及控制图片的CSS属性：

- `translateX`来控制左右移动（图片被移出屏幕）
- `scale`来控制缩放（淡入淡出效果）

涉及页面尺寸的属性

- `window.scrollY`文档从顶部开始滚动过的像素值
- `window.innerHeight viewport`部分的高度
- `ele.height`元素的高度
- `ele.offsetTop`当前元素顶部相对于其offsetParent元素的顶部的距离

感谢Soyaine的图片
![demo](https://camo.githubusercontent.com/a282abd64c941de2cb29bfa8f64994ef4eb69ce50053a48cacda1a7d564c7a53/68747470733a2f2f636c2e6c792f3077337031763179337131342f496d616765253230323031372d30372d3138253230617425323031302e32342e31302532302545342542382538412545352538442538382e706e67)

```javascript
// 滑动页面的底部距离扣除图片一半的高
const slideInAt = window.scrollY + window.innerHeight - img.height / 2;
// 图片底部距离顶端的距离
const imgBottom = img.offsetTop + img.height;
// 已滑过了图片的一半
const isHalfShow = slideInAt > img.offsetTop;
// 未完全滑过图片
const isNotScrollPast = window.scrollY < imgBottom;
```
