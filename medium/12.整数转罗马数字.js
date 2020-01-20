/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// 特殊的规则只适用于以下六种情况：
// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

// 输入确保在 1 到 3999 的范围内

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  // 确保范围在 [1,3999]
  if(!num || num < 1 || num > 3999) {
    return ''
  }
  const romanMap = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  } // 罗马数字，包括特殊逻辑
  let roman = '' // 输出罗马数字字符串
  const romanKeys = Object.keys(romanMap)
  let i = romanKeys.length - 1
  while(num > 0 && i > -1) {
    const value = romanKeys[i]
    if (num < value) {
      i--
    } else {
      num -= value
      roman += romanMap[value]
    }
  }
  return roman
};
// @lc code=end

