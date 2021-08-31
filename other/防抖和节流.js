/**
 - 函数防抖，在一段连续操作结束后，处理回调，利用clearTimeout 和 setTimeout实现。如：搜索联想；监听window resize
 - 函数节流，在一段连续操作中，每一段时间只执行一次，频率较高的事件中使用来提高性能。如：鼠标不断点击触发；监听滚动事件，比如是否滑到底部自动加载更多
 - 函数防抖关注一定时间连续触发的事件只执行最后触发的那一次，而函数节流侧重于一段时间内只执行最早触发的一次。
 */

// 【防抖】：
// 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
function debounce(fn, delay) {
  var timer; // 维护一个 timer
  return function () {
    var _this = this; // 取debounce执行作用域的this
    var args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      fn.apply(_this, args); // 用apply指向调用debounce的对象，相当于_this.fn(args);
    }, delay);
  };
}
// test
var count = 0;
function testDebounce(content, now) {
  console.log(content, now);
}
var testDebounceFn = debounce(testDebounce, 1000); // 防抖函数
document.onmousemove = function (e) {
  count++;
  testDebounceFn('debounce', count); // 给防抖函数传参
}

// 【节流】：
// 规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
function throttle(fn, delay) {
  var timer;
  return function () {
    var _this = this;
    var args = arguments;
    if (timer) {
      return;
    }
    timer = setTimeout(function () {
      fn.apply(_this, args);
      timer = null; // 在delay后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
    }, delay)
  }
}
// test
var count = 0;
function testThrottle(content, now) {
  console.log(content, now);
}
var testThrottleFn = throttle(testThrottle, 1000); // 节流函数
document.onmousemove = function (e) {
  count++;
  testThrottleFn('throttle', count); // 给节流函数传参
}