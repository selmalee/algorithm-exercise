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
  if (!nLen) {
    return 0
  }
  let i = 0, j = 0
  while(i < hLen && j < nLen ) {
    if (haystack[i] === needle[j]) {
      i++
      j++
    } else {
      i = i - j + 1 // i回溯到匹配的开头的下一个
      j = 0 // j回到原点
      // 如果剩下的长度小于needle长度，则不匹配，直接返回错误
      if (hLen - i < nLen) {
        return -1
      }
    }
  }
  if (j === nLen) {
    return i - j
  } else {
    return -1
  }
  // return haystack.indexOf(needle)
};

function getPartialMatchTable(str) {
  const strLen = str.length
  let pmt = [0]
  if (strLen === 1) {
    return pmt
  }
  let prefix = [], postfix = []
  for (let i = 1; i < strLen;) {

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

