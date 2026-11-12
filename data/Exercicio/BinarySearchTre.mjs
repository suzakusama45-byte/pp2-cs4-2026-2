/*1. BinarySearchTree.mjs */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor(compareFn = (a, b) => a - b) {
    this.root = null;
    this.compareFn = compareFn;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
      return true;
    }
    return this._insertNode(this.root, newNode);
  }

  _insertNode(node, newNode) {
    const cmp = this.compareFn(newNode.data, node.data);
    if (cmp < 0) {
      if (node.left === null) {
        node.left = newNode;
        return true;
      }
      return this._insertNode(node.left, newNode);
    } else if (cmp > 0) {
      if (node.right === null) {
        node.right = newNode;
        return true;
      }
      return this._insertNode(node.right, newNode);
    }
    return false;
  }

  inOrderTraverse(callback) {
    this._inOrderTraverseNode(this.root, callback);
  }

  _inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this._inOrderTraverseNode(node.left, callback);
      callback(node.data);
      this._inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback) {
    this._preOrderTraverseNode(this.root, callback);
  }

  _preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.data);
      this._preOrderTraverseNode(node.left, callback);
      this._preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback) {
    this._postOrderTraverseNode(this.root, callback);
  }

  _postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this._postOrderTraverseNode(node.left, callback);
      this._postOrderTraverseNode(node.right, callback);
      callback(node.data);
    }
  }

  search(key) {
    return this._searchNode(this.root, key);
  }

  _searchNode(node, key) {
    if (node === null) return null;
    const cmp = this.compareFn(key, node.data);
    if (cmp < 0) return this._searchNode(node.left, key);
    if (cmp > 0) return this._searchNode(node.right, key);
    return node.data;
  }

  height() {
    return this._heightNode(this.root);
  }

  _heightNode(node) {
    if (node === null) return -1;
    const leftHeight = this._heightNode(node.left);
    const rightHeight = this._heightNode(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  countLeaves() {
    return this._countLeavesNode(this.root);
  }

  _countLeavesNode(node) {
    if (node === null) return 0;
    if (node.left === null && node.right === null) return 1;
    return this._countLeavesNode(node.left) + this._countLeavesNode(node.right);
  }

  count() {
    return this._countNode(this.root);
  }

  _countNode(node) {
    if (node === null) return 0;
    return 1 + this._countNode(node.left) + this._countNode(node.right);
  }

  remove(key) {
    this.root = this._removeNode(this.root, key);
  }

  _removeNode(node, key) {
    if (node === null) return null;
    const cmp = this.compareFn(key, node.data);
    if (cmp < 0) {
      node.left = this._removeNode(node.left, key);
      return node;
    } else if (cmp > 0) {
      node.right = this._removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      }

      if (node.right === null) {
        node = node.left;
        return node;
      }

      const aux = this._findMinNode(node.right);
      node.data = aux.data;
      node.right = this._removeNode(node.right, aux.data);
      return node;
    }
  }

  _findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  printTree() {
    this._printNode(this.root, 0);
  }

  _printNode(node, level) {
    if (node !== null) {
      this._printNode(node.right, level + 1);
      console.log("    ".repeat(level) + (node.data.ra || node.data));
      this._printNode(node.left, level + 1);
    }
  }
}

/*parte1.mjs */
