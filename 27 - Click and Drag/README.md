## 基础知识

坐标计算关系

- `e.pageX`：鼠标相对于整个页面的横坐标
- `slider.offsetLeft`：slider相对于最近父元素的左偏移
- `x = e.pageX - slider.offsetLeft`：鼠标在slider内部的相对位置
- `scrollLeft`：当前滑动条的位置
- `walk = x - startX`：鼠标在slider内移动了多少距离
- `scrollLeft`的更新逻辑`slider.scrollLeft = scrollLeft - walk;`
