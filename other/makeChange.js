// 贪心算法 找零金额小于1元
function makeChange(money) {
  let coins = []
  if (money % .25 < money) {
    coins[3] = parseInt(money / .25)
    money = money % .25
  }
  if (money % .1 < money) {
    coins[2] = parseInt(money / .1)
    money = money % .1
  }
  if (money % .05 < money) {
    coins[1] = parseInt(money / .05)
    money = money % .05
  }
  coins[0] = parseInt(money / .01)

  console.log(coins[0] + '个1美分')
  console.log(coins[1] + '个5美分')
  console.log(coins[2] + '个10美分')
  console.log(coins[3] + '个25美分')
}
