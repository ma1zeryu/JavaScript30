## 基础知识

- `display: flex`：把这个元素变成flex容器，子元素会变成`flex item`

- `justify-content: center`：控制主轴方向（默认水平），效果：居中对齐

- `align-items: center`：垂直居中，和上面`justify-content: center`配合达到水平 +垂直居中

- `flex: 1 0 auto`：是写给`flex item`的，是三个属性的缩写`flex: grow shrink basis`，`flex-grow: 1`：可以吃掉剩余空间，`flex-shrink: 0`：不允许缩小，`flex-basis:auto`：初始大小按内容大小分配

* `flex-direction`：调整flex主轴方向，`row column`

* `transform:translateX/translateY`：对元素进行几何变换

  常见模式
  1. 居中（配合定位）

  ```CSS
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);//相对于自身的尺寸，向上/右50%
  ```

  2. 滑入/滑出动画

  ```CSS
  .panel { transform: translateY(100%); }
  .panel.show { transform: translateY(0); }
  ```

- `element.classList.toggle()`对元素的class做开关操作，`el.classList.toggle('active');`

- `transitionend`事件，`el.addEventListener('transitionend', handler);`

  ```javascript
  function onTransitionEnd(e) {
    if (e.propertyName.includes("transform")) {
      //避免多次触发
      this.classList.add("done");
    }
  }
  ```

## 解决历史遗留bug

连续点击两次会让状态错位，快速点击会打断前一次`transition`，使 `transitionend`的触发不再稳定对应某次点击；而你在回调里用了`toggle`，导致`open-active`被按事件次数翻转，而不是按当前`open`状态同步，所以出现错位。第一种解决思路见代码，改变逻辑

另一种解决思路，去掉对于第一段动画结束的监听，而是改为两个动画都绑定`open`事件，只是第二段动画延迟一些播放。
