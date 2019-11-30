// 题目描述
// 把只包含质因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含质因子7。 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。

// 方案一：数字递增，判断每一个数字是否丑数
// function GetUglyNumber_Solution(index) {
//   let count = 1 // 计算找到丑数个数
//   let num = 1
//   while (count < index) {
//     num++
//     if (isUgly(num)) {
//       count++
//     }
//   }
//   console.log(num)
//   return num
// }

// function isUgly(number) {
//   while (number % 2 === 0) {
//     number /= 2
//   }
//   while (number % 3 === 0) {
//     number /= 3
//   }
//   while (number % 5 === 0) {
//     number /= 5
//   }
//   return number === 1
// }

// 方案二：计算下一个丑数。用一个数组存储丑数。根据丑数的规则，设最大的丑数为M，前面的丑数乘以2后，第一个大于M的数为M2；同理得M3和M5。下一个丑数应该是M2、M3和M5中的最小值。
function GetUglyNumber_Solution(index) {
  if (index < 1) {
    return 0
  }
  let uglies = [1] // 存储找到的丑数
  let ugliesId = 0 // 数组的索引
  let M2Id = 0 // 计算M2用的数组的索引
  let M3Id = 0 // 计算M3用的数组的索引
  let M5Id = 0 // 计算M5用的数组的索引
  while (ugliesId + 1 < index) {
    let M = uglies[uglies.length - 1] // 最大的丑数
    while (uglies[M2Id] * 2 <= M) { // M2为乘以2第一个大于M的数
      M2Id++
    }
    while (uglies[M3Id] * 3 <= M) { // M3为乘以3第一个大于M的数
      M3Id++
    }
    while (uglies[M5Id] * 5 <= M) { // M5为乘以5第一个大于M的数
      M5Id++
    }
    uglies.push(getMin(uglies[M2Id] * 2, uglies[M3Id] * 3, uglies[M5Id] * 5)) // M2、M3和M5中的最小值
    ugliesId++
  }
  // console.log(uglies)
  return uglies[uglies.length - 1]
}

function getMin(num1, num2, num3) {
  let min = num1
  if (num2 < min) {
    min = num2
  }
  if (num3 < min) {
    min = num3
  }
  return min
}

// GetUglyNumber_Solution(10)
