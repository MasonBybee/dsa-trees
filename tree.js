/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (this.root) {
      const sumValueQueue = [this.root];
      let sum = 0;
      while (sumValueQueue.length) {
        const current = sumValueQueue.shift();
        sum += current.val;
        for (let child of current.children) {
          sumValueQueue.push(child);
        }
      }
      return sum;
    } else return 0;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (this.root) {
      const countValueQueue = [this.root];
      let count = 0;
      while (countValueQueue.length) {
        const current = countValueQueue.shift();
        if (!current.val) {
          console.log(current.val);
        }
        if (current.val % 2 === 0) {
          count += 1;
        }
        for (let child of current.children) {
          countValueQueue.push(child);
        }
      }
      return count;
    } else return 0;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (this.root) {
      const countValueQueue = [this.root];
      let count = 0;
      while (countValueQueue.length) {
        const current = countValueQueue.shift();
        if (current.val > lowerBound) {
          count += 1;
        }
        for (let child of current.children) {
          countValueQueue.push(child);
        }
      }
      return count;
    } else return 0;
  }
}

module.exports = { Tree, TreeNode };
