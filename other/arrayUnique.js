// 数组去重

// 遍历数组 顺序查找 时间复杂度O(n^2)
function unique(arr) {
  let uqArr = []
  for (let i = 0, len = arr.length; i < len; i++) {
    if (uqArr.indexOf(arr[i]) === -1) {
      uqArr.push(arr[i])
    }
  }
  return uqArr
}

// 对象键值对 js中的对象是基于哈希表结构的 时间复杂度O(n) 空间换时间
function uniqueHash(arr) {
  let hash = {}
  let uqArr = []
  let item
  for (let i = 0, len = arr.length; i < len; i++) {
    item = arr[i]
    if(!hash[item]) {
      hash[item] = true
      uqArr.push(item)
    }
  }
  return uqArr
}
// 在上面的基础上，区分数据类型，解决如果数组的某元素是__proto__和碰撞的问题
function uniqueHash2(arr) {
  let hash = Object.create(null)
  let uqArr = []
  let item
  for (let i = 0, len = arr.length; i < len; i++) {
    item = arr[i]
    if(!hash[item]) {
      hash[item][typeof item] = true
      uqArr.push(item)
    }
  }
  return uqArr
}
