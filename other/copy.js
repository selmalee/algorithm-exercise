// 深拷贝与浅拷贝
// 引用类型的赋值是传址。只是改变指针的指向

var obj1 = {
  'name' : 'zhangsan',
  'age' :  '18',
  'language' : [1,[2,3],[4,5]],
  'fn': function(){return 1},
  'reg': new RegExp(/^\d+$/)
};

// 浅拷贝
// 只复制一层对象的属性，并不包括对象里面的为引用类型的数据
function shallowCopy(src) {
  var dst = {};
  for (var prop in src) {
      if (src.hasOwnProperty(prop)) {
          dst[prop] = src[prop];
      }
  }
  return dst;
}
var obj2 = shallowCopy(obj1);
// 改变浅拷贝得到的 obj2 中的引用类型时，会使原始数据得到改变。
obj2.language[2] = ["四","五"]
console.log(obj1)

// 深拷贝
// 1. JSON.parse(JSON.stringify(obj))
// 缺点：Date类型会转成字符串，正则对象转为空对象，函数会转成undefined
console.log(JSON.parse(JSON.stringify(obj1)))

// 2. for循环递归拷贝对象的每一个属性
// 缺点：Date类型、正则对象和函数转为空对象
// 对于闭环对象如{a:{a:{a:{}}}}，可以声明一个数组把已经拷贝过的对象存起来，避免重复拷贝
// 参考[结构化克隆](https://developer.mozilla.org/zh-CN/docs/Web/Guide/API/DOM/The_structured_clone_algorithm#%E7%9B%B8%E5%85%B3%E9%93%BE%E6%8E%A5)
function deepCopy(obj) {
  if (typeof obj !== 'object') {
    return obj
  }
  let res
  let hash = new WeakMap()
  let Constructor = obj.constructor
  switch(Constructor){ // 解决特殊对象Date等转为空对象的问题
    case RegExp:
      res = new Constructor(obj)
      break
    case Date:
      res = new Constructor(obj.getTime())
      break
    default:
      if (hash.has(obj)) {
        return hash.get(obj)
      }
      res = new Constructor()
      hash.set(obj, res)
  }
  for (k in obj) {
    if (typeof obj[k] === 'object') {
      res[k] = deepCopy(obj)
    } else {
      res[k] = obj[k]
    }
  }
  return res
}