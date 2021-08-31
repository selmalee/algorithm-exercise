// 题目描述
// 给你一根长度为n的绳子，请把绳子剪成m段（m、n都是整数，n>1并且m>1），每段绳子的长度记为k[0],k[1],...,k[m]。请问k[0]xk[1]x...xk[m]可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
// 输入描述:
// 输入一个数n，意义见题面。（2 <= n <= 60）

// 方案一：动态规划思想。因为求问题的最优解是由若干个小问题组成的，而且这些小问题之间还有重叠的情况，所以自下而上地计算小问题的最优解并存储下来，最终得到大问题的最优解。
// function cutRope(number) {
//   if (!number) {
//     return 0
//   } else if (number === 2 || number === 1) {
//     return 1
//   } else if (number === 3) {
//     return 2
//   }
//   let maxes = [0, 1, 1, 2] // 存储子问题的最优解
//   // i > 4时，f(i) = f(j) * f(i - j)
//   for (let i = 4; i <= number; i++) { // i递增，自下而上
//     let max = 0
//     for (let j = 1; j < i; j++) {
//       const count = maxes[j] * maxes[i - j]
//       if (count > max) {
//         max = count
//       }
//     }
//     maxes[i] = max
//   }
//   return maxes[number]
// }


// 方案二：贪婪算法。当n >= 5时，尽可能多剪去3；当n = 4时，最优解是2 * 2
// 证明：由于3(n - 3) > n且2(n - 2) > n，则当n >= 5时，可以把绳子剪成2或者3的绳子段。当n >= 5时，3(n - 3) >= 2(n - 2)；当n = 4时，2 * 2 > 3 * 1
function cutRope(number) {
  if (number < 2) {
    return 0
  } else if (number === 2) {
    return 1
  } else if (number === 3) {
    return 2
  }
  
  let timesOfThree = Math.floor(number / 3)
  if (number - 3 * timesOfThree === 1) {
    // 如果是4，则减去一次，因为2 * 2 > 3 * 1
    timesOfThree--
  }
  const timesOfTwo = Math.floor((number - 3 * timesOfThree) / 2)
  return Math.pow(3, timesOfThree) * Math.pow(2, timesOfTwo)
}
