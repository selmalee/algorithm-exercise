/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length === 1 || (s.length > 1 && !(/[\)\]\}]/.test(s)))) {
    return false
  }
  let stack = []
  for (let i = 0, len = s.length; i < len; i++) {
    const item = s[i]
    // 遇到左括号存储到栈中，遇到右括号就从栈中取值比对
    if (item === '(' || item === '[' || item === '{') {
      stack.push(item)
    } else if ((item === ')' && stack.pop() !== '(') || (item === ']' && stack.pop() !== '[') || (item === '}' && stack.pop() !== '{')) {
      return false
    }
  }
  // 如果栈中还有左括号则返回false
  return stack.length === 0
};

// var isValid = function(s) {
//   var st = []
//   for(var l of s)
//       if ((i="({[]})".indexOf(l))>-1)
//           if (st[st.length-1]+i===5)
//               st.length--;
//           else
//               st.push(i);
//   return st.length===0
// }
// @lc code=end

