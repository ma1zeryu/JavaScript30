## 相关知识点

1. 事件委托
   - 列表类（TodoList、评论、表格）
   - 动态增删节点
   - 节点数量多
   - 高频交互
     对比遍历绑定：
   * 元素数量少（按钮、表单）
   * 结构稳定（不会动态变化）
   * 逻辑简单
   - 把事件绑定在父节点上，然后`e.target`来确定具体点击对象
2. localstorage
   - `localStorage.setItem()`
   - `localStorage.getItem()`
3. JSON
   - `JSON.stringify()`
   - `JSON.parse()`
4. Event
   - `event.preventDefault`
   - `eventTarget.addEventListener`
