## 内容

一个关于数组常用函数的练习

## 炫酷的调试技巧

`console.table(thing)`夸张的一批

## 相关知识

`filter`返回满足条件元素所组成的数组

`map`处理每个元素后返回一个新数组

`sort`默认升序，可以接受一个函数作为参数，返回负值a排在b前

```javascript
const __ordered = inventors.sort((a, b) => (a > b ? 1 : -1));
console.table(__ordered);
```

`filter和map结合`

```javascript
// https://book.douban.com/tag/web
const cate = document.querySelectorAll(".subject-list h2 a");
const links = Array.from(cate); //要主动转为数组，原本是NodeList [...cate]也可
const book = links
  .map((link) => link.title)
  .filter((title) => title.includes("CSS"));
```

`reduce`一个归并数组的方法，接受一个函数作为参数，会遍历数组的所有项，然后构建一个最终的返回值，这个值就是累加器的第一个参数

```javascript
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];
const reduce = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {}); //这下面可以设置一个初始值
console.log(reduce);
```
