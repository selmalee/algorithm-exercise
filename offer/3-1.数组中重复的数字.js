// 题目描述
// 在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。请找出数组中任意一个重复的数字。 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。
//这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
//函数返回True/False

function duplicate(numbers, duplication) {
  if (!numbers || numbers.length === 0 ||numbers.filter(item => item < 0 || item > numbers.length - 1).length > 0) {
    return false
  }
  //函数返回True/False
  
  // 1. hash写法，时间复杂度O(n)，空间复杂度O(n)
  // let hash = []
  // for (let i = 0, len = numbers.length; i < len; i++) {
  //     if (hash[numbers[i]]) {
  //         duplication[0] = numbers[i]
  //         return true
  //     }
  //     hash[numbers[i]] = true
  // }
  // return false

  // 2. 利用数组特性，时间复杂度O(n)，空间复杂度O(1)
  for (let i = 0, len = numbers.length; i < len; i++) {
    // 使得numbers[i] = i，当已存在numbers[numbers[i]] = numbers[i]时，则为重复项
    while (numbers[i] !== i) {
      const targetI = numbers[i]
      if (numbers[targetI] === targetI) {
        duplication[0] = targetI
        return true
      }
      // i 与 numbers[i]互换位置
      const temp = numbers[i]
      numbers[i] = numbers[targetI]
      numbers[targetI] = temp
    }
  }
  return false
}

console.log(duplicate([0,1,4,1,1,5,6,7], []))
