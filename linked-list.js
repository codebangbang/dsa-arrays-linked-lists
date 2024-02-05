/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  _getComputedStyle(idx) { 
    let cur = this.head;
    let count = 0;
    while (cur !== nul && count != idx) {
      count += 1;
      cur = cur.next;
    }
    return cur;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = this.head;
    } else {
     this.tail.next = newNode;
     this.tail = newNode;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length += 1;
    return newNode;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.length) {
      return null;
    } else {
      let currentNode = this.head;
      let secondToLastNode = this.head;
      while (currentNode.next) {
        secondToLastNode = currentNode;
        currentNode = currentNode.next;
      }
      secondToLastNode.next = null;
      this.tail = secondToLastNode;
      this.length -= 1;
      if (!this.length) {
        this.head = null;
        this.tail = null;
      }
      return currentNode;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.length) {
      return null;
    } else {
      let nodeToRemove = this.head;
      this.head = this.head.next;
      this.length -= 1;
      if (!this.length) {
        this.tail = null;
      }
      return nodeToRemove;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.get(idx);
    if (currentNode) {
      currentNode.val = val;
      return currentNode;
    } else {
      return null;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      return null;
    } else if (idx === 0) {
      return this.unshift(val);
    } else if (idx === this.length) {
      return this.push(val);
    } else {
      let preDesiredPlace = this.get(idx -1);
      let newNode = new Node(val);
      newNode.next = preDesiredPlace.next;
      preDesiredPlace.next = newNode;
      this.length += 1;
      return newNode;
    }
  }
  
  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    } else if (idx === 0) {
      return this.shift();
    } else if (idx === this.length -1) {
      return this.pop();
    } else {
      let preNodeToRemove = this.get(idx -1);
      let nodeToRemove = preNodeToRemove.next;
      preNodeToRemove = nodeToRemove.next;
      this.length -= 1;
      return nodeToRemove;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }
    return total / this.length;
  }


module.exports = LinkedList;
