// 题目描述
// 请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

function replaceSpace(str)
{
  // 算出空格数
  const len = str.length
  let blankCount = 0
  for (let i = 0; i < len; i++) {
    if (str[i] === ' ') {
      blankCount++
    }
  }
  // 从后往前替换
  const arr = str.split('') // js不能直接修改字符串的值，所以转换成数组
  let id = len - 1
  let newId = len + 2 * blankCount - 1
  while(newId > id && id >= 0) {
    if (arr[id] === ' ') {
      arr[newId--] = '0'
      arr[newId--] = '2'
      arr[newId--] = '%'
    } else {
      arr[newId--] = arr[id]
    }
    --id
  }
  str = arr.join('') // 再转换为字符串
  return str
}
