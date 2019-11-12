/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const hLen = haystack.length;
  const nLen = needle.length;
  if (!nLen || haystack === needle) {
    return 0
  }
  if (nLen >= hLen) {
    return -1
  }
  const pmt = getPartialMatchTable(needle) // 部分匹配表
  console.log(pmt)
  let i = 0, j = 0
  while(i < hLen && j < nLen ) {
    // console.log(i, j, haystack[i], needle[j])
    if (haystack[i] === needle[j]) {
      i++
      j++
    } else {
      if (j) {
        j = pmt[j - 1] // 根据kmp算法，i不动，j=j - (已匹配的字符数 - 对应的部分匹配值)
      } else {
        i++
      }
    }
  }
  return j === nLen ? i - j : -1
};

// 获取部分匹配数组
function getPartialMatchTable(str) {
  const len = str.length
  let pmt = [0]
  // 得出每个子字符串的前缀数组与后缀数组的交集的最长长度。
  for (let i = 1, preId = 0; i < len;) {
    if (str[i] === str[preId]) {
      preId++
      pmt[i] = preId
      i++
    } else if (preId) {
      preId = pmt[preId - 1] // 利用前面已经算好的部分匹配值，preId回溯到上一个对应到部分匹配值
    } else {
      pmt[i] = 0
      i++
    }
  }
  return pmt
}

// BF算法，即暴风(Brute Force)算法，暴力破解
// var strStr = function(haystack, needle) {
//   const hLen = haystack.length;
//   const nLen = needle.length;
//   if (!nLen) {
//     return 0
//   }
//   let i = 0, j = 0
//   while(i < hLen && j < nLen ) {
//     if (haystack[i] === needle[j]) {
//       i++
//       j++
//     } else {
//       i = i - j + 1 // i回溯到匹配的开头的下一个
//       j = 0 // j回到原点
//       // 如果剩下的长度小于needle长度，则不匹配，直接返回错误
//       if (hLen - i < nLen) {
//         return -1
//       }
//     }
//   }
//   if (j === nLen) {
//     return i - j
//   } else {
//     return -1
//   }
//   // return haystack.indexOf(needle)
// };
// @lc code=end

