// 题目描述
// 牛客最近来了一个新员工Fish，每天早晨总是会拿着一本英文杂志，写些句子在本子上。同事Cat对Fish写的内容颇感兴趣，有一天他向Fish借来翻看，但却读不懂它的意思。例如，“student. a am I”。后来才意识到，这家伙原来把句子单词的顺序翻转了，正确的句子应该是“I am a student.”。Cat对一一的翻转这些单词顺序可不在行，你能帮助他么？

// 方案一：以空格分割单词，遇到空格就把前面的字符串存到栈里，再逐个出栈。时间复杂度为O(n)，空间复杂度为O(n)。
function ReverseSentence(str) {
  let stack = []
  let start = 0 // 子字符串即单词的开始索引
  for (let i = 0, len = str.length; i < len; i++) {
    if (str[i] === ' ') {
      stack.push(str.substring(start, i))
      start = i + 1
    }
  }
  stack.push(str.substring(start))
  // 或者用函数 stack = str.split(' ')
  let reverseStr = ''
  for (let i = 0, len = stack.length; i < len; i++) {
    reverseStr += stack.pop()
    if (i < len - 1) {
      reverseStr += ' '
    }
  }
  return reverseStr
}

// 方案二：两个指针分别指向字符串的头和尾。翻转字符串，交换头指针和尾指针的值。再逐个单词翻转。时间复杂度为O(n)，空间复杂度为0（js中不能直接修改字符串str[i]，需要使用数组，所以实际上空间复杂度为O(n)）。
// function ReverseSentence(str) {
//   if (str.length < 2) {
//     return str
//   }
//   let reverseStr = reverse(str)
//   let start = 0
//   for (let i = 0, len = reverseStr.length; i < len; i++) {
//     if (reverseStr[i] === ' ') {
//       reverseStr = (start > 0 ? reverseStr.substring(0, start) : '') + reverse(reverseStr.substring(start, i)) + reverseStr.substring(i)
//       start = i + 1
//     }
//   }
//   reverseStr = (start > 0 ? reverseStr.substring(0, start) : '') + reverse(reverseStr.substring(start))
//   return reverseStr
// }

// function reverse(str) {
//   let arr = str.split('')
//   let start = 0
//   let end = str.length - 1
//   while(start < end) {
//     const temp = arr[start]
//     arr[start] = arr[end]
//     arr[end] = temp
//     start++
//     end--
//   }
//   return arr.join('')
// }

// console.log(ReverseSentence('I am a student.'))