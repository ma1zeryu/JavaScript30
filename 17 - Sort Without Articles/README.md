here we gooooooo!

数组的去前缀排序

1. 去前缀函数，是用正则表达式

```javascript
function delPrefix(item) {
  return item.replace(/^(The|A|An)\s{1}/, "");
}
```

2. 使用`Array.sort()`对数组进行排序

```javascript
var sortedbands = bands.sort(function (a, b) {
  return delPrefix(a) > delPrefix(b) ? 1 : -1;
});
```

3. 使用选择器选中无序列表容器，将排序后的数组转换为大字符串插进去

```javascript
document.getElementById("bands").innerHTML =
  "<li>" + arr.join("</li><li>") + "</li>";
```
