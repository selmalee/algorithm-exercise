/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * 本题要求我们对一个特殊的链表进行深拷贝。如果是普通链表，我们可以直接按照遍历的顺序创建链表节点。而本题中因为随机指针的存在，当我们拷贝节点时，「当前节点的随机指针指向的节点」可能还没创建，因此我们需要变换思路。一个可行方案是，我们利用回溯的方式，让每个节点的拷贝操作相互独立。对于当前节点，我们首先要进行拷贝，然后我们进行「当前节点的后继节点」和「当前节点的随机指针指向的节点」拷贝，拷贝完成后将创建的新节点的指针返回，即可完成当前节点的两指针的赋值。
 * 时间复杂度：O(n) 其中 nn 是链表的长度。对于每个节点，我们至多访问其「后继节点」和「随机指针指向的节点」各一次，均摊每个点至多被访问两次。
 * 空间复杂度：O(n)其中 n 是链表的长度。为哈希表的空间开销。
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head, cachedNode = new Map()) {
  if (!head) {
    return null;
  }
  if (!cachedNode.has(head)) {
    cachedNode.set(head, {
      val: head.val,
    });
    Object.assign(cachedNode.get(head), {
      next: copyRandomList(head.next, cachedNode),
      random: copyRandomList(head.random, cachedNode),
    });
  }
  return cachedNode.get(head);
};

// 非递归版本
var copyRandomList = function(head) {
  if (!head) {
    return null;
  }
  const nodeMap = new Map();
  let cur = head;
  while(cur) {
    nodeMap.set(cur, new Node(cur.val));
    cur = cur.next;
  }
  cur = head;
  while(cur) {
    nodeMap.get(cur).next = nodeMap.get(cur.next) || null;
    nodeMap.get(cur).random = nodeMap.get(cur.random) || null;
    cur = cur.next;
  }
  return nodeMap.get(head);
};

/**
 * 不用map记录节点的方案（节省空间复杂度）：
 * 第一步，根据遍历到的原节点创建对应的新节点，每个新创建的节点是在原节点后面
 * 第二步是最关键的一步，用来设置新链表的随机指针
 * 第三步就简单了，只要将两个链表分离开，再返回新链表就可以了
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
*/
var copyRandomList = function(head) {
  if (!head) return null;
  let newHeadPre = new Node(-1, null, null)
  let cur = head; // 原链表当前节点
  let newHeadCur = newHeadPre; // 新链表当前节点
  // 克隆节点，构成新链表，并建立link
  while(cur) {
    let newNode = new Node(cur.val, null, null); // 复制的新节点
    newHeadCur.next = newNode; // 前一个节点和新节点关联
    cur.link = newNode; // 老节点的link指向了新的节点 关联
    newHeadCur = newHeadCur.next;
    cur = cur.next;
  }
  cur = head;
  // 设置新节点的random
  while(cur) {
    if (cur.random) {
      cur.link.random = cur.random.link; // random指向原节点的random的克隆体
    }
    cur = cur.next
  }
  // 删除link
  while(cur) {
    delete(cur.link)
    cur = cur.next
  }
  return newHeadPre.next;
};
// @lc code=end

