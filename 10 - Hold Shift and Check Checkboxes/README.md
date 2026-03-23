JS实现Checkbox中按住Shift的多选功能

```javascript
const boxArr = Array.from(boxs);
let lastChecked;
let onOff = false;

// 处理方法二：利用数组索引获取需要选中的范围
function handleCheck1(e) {
  if (!lastChecked) lastChecked = this; //避免直接按shift是吧
  onOff = lastChecked.checked ? true : false; //判断是要取消掉还是删除掉
  if (e.shiftKey) {
    let start = boxArr.indexOf(this);
    let end = boxArr.indexOf(lastChecked);
    boxArr
      .slice(Math.min(start, end), Math.max(start, end) + 1)
      .forEach((input) => (input.checked = onOff));
    console.log(start + "+" + end);
  }
  lastChecked = this;
}
```
