// 题目：假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？例如，一只股票在某些时间节点的价格为[9,11,8,5,7,12,16,14]。如果我能在价格为5的时候买入并在价格为16时卖出，则能收获最大的利润11。

function maxDiff(numbers) {
  if (!numbers || numbers.length < 2) {
    return 0
  }
  let min = numbers[0]
  let maxDiff = 0
  for (let i = 0, len = numbers.length; i < len; i++) {
    const item = numbers[i]
    // 计算当前diff，记录diff最大值
    if (item - min > maxDiff) {
      maxDiff = item - min
    }
    // 记录第i个数字前的i-1数字中的最小值
    if (item < min) {
      min = item
    }
  }
  return maxDiff
}

console.log(maxDiff([9,11,8,5,7,12,16,14]))
