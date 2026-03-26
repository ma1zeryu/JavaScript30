感受对不同类型数据的引用`Reference`和复制`Copy`

主要数组和对象容易出问题

尤其是神秘的多层对象，ES6`...`语法只能保证第一层的深度复制，如果我们希望对整体进行深度复制，wes老师给出了一个曲线救国的方式`const dev2 = JSON.parse(JSON.stringify(wes));`
