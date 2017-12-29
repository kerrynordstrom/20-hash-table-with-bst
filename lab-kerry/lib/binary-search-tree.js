'use strict';

class TreeNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //Refactored insert method in order to use separate node class
  insert(key, value) {

    let node = new TreeNode(key, value);

    if (typeof key !== 'string')
      throw new TypeError('Value must be a string');

    if (key === null)
      throw new TypeError('Must pass a valid object');

    if (!this.root) {
      // console.log(this.root);
      this.root = node;
    } else {
      let currentNode = this.root;
      

      while (currentNode) {
        if (node.key < currentNode.key) {
          if (!currentNode.left) {
            return currentNode.left = node;

          }
          currentNode = currentNode.left;

        } else if (node.key > currentNode.key) {
          if (!currentNode.right) {
            return currentNode.right = node;

          }
          currentNode = currentNode.right;

        } else {
          return null;
        }
      }
    }
  }
	
  find(key) {
		return this._find(this.root, key);
  }

  _find(node, key) {

    if (key === '')
      throw new TypeError('Must input value');

    if (typeof key !== 'string')
      throw new TypeError('Value must be a string');

    if(!node) {
      return null;
    }
    if (key === node.key) {
      return node;
    }
    if (key < node.key) {
      return this._find(node.left, key);
    } else {
      return this._find(node.right, key);
    }
  }


  //Remove method that calls helper function given a value and establishes a root at that value for which to execute its functionality.
  remove(key) {
    return this._removeNode(this.root, key);
  }

  //----------------------------
  //Helper functions
  //----------------------------

  //Finds smallest key on right side of BST.
  _findMinNodeKey(node) {
    if (!node) {
      node = this.root;
    }
    while (node.left) {
      node = node.left;
    }
    return node.key;
  }
	
	 //Finds companion value of key on right side of BST.
  _findMinNodeValue(node) {
    if (!node) {
      node = this.root;
    }
    while (node.left) {
      node = node.left;
    }
    return node.value;
  }
	

  //Heavy lifting of comparing input value with node values on tree to determine where it lives on the tree and where the value needs to be reassigned in order to safely delete just one node.
  _removeNode(node, key) {
    if (!node) {
      return null;
    }
    if (key === node.key) {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }
      //Assign temporary node value when there are 2 children.
      let tempKey = this._findMinNodeKey(node.right);
      let tempValue = this._findMinNodeValue(node.right);
      node.key = tempKey;
      node.value = tempValue;

      node.right = this._removeNode(node.right, tempKey, tempValue);
      return node;

    } else if (key < node.key) {
      node.left = this._removeNode(node.left, key);
      return node;

    } else {
      node.right = this._removeNode(node.right, key);
      return node;
    }
  }
}

module.exports = TreeNode;
module.exports = BinarySearchTree;
