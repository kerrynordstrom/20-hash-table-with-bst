'use strict';


const BinarySearchTree = require('./binary-search-tree');
// const TreeNode = require('./binary-search-tree');

class HashTable {
  constructor(capacity = 1) {
    this._capacity = capacity;
    this._buckets = new Array(capacity);
  }
  // this function will be very prone to collisions
  // // don't use in a production envionment
  _generateHash(key) {
    if (typeof key !== 'string')
      throw new TypeError('__ERROR__ key should be a string');

    let rawHash = 0;

    for (let i in key) {
      rawHash += key.charCodeAt(i);
    }

    return rawHash % this._capacity;
  }

  set(key, value) {
    let hash = this._generateHash(key);
    let bst = new BinarySearchTree();
		
    //here, the bucket is empty
    if (!this._buckets[hash]) {
      this._buckets[hash] = bst;
			bst.insert(key, value);
			console.log(this);
      return this;
    }
    //this bucket is not empty
    let rootNode = this._buckets[hash];
    console.log(rootNode);
    let node = rootNode.find(key);

    if (node) {
      node.value = value; //updating this value
      return this;
    }

    //if we are not updating a key, we created a new element in the linked list
    rootNode.insert(key, value);
    return this;
  }


  get(key) {
    let hash = this._generateHash(key);

    if (!this._bucks[hash]) {
      return undefined;
    }

    let node = this._buckets[hash].find(node => node.key === key);

    if (node)
      return node.htValue;
    else
      return undefined;

  }
	
  delete(key) {
    let hash = this._generateHash(key);

    if(!this._buckets[hash])
      return false;
		
    let node = this._buckets[hash].find(node => node.key === key);

    if(node) {
      this._buckets[hash] = this._buckets[hash].remove(node);
      return true;
    }
    return false;
  }
}

let hashTable = new HashTable();
hashTable.set('narrator', 12);
// hashTable.set('harold', 4);
// hashTable.set('narrator', 12);

console.log(JSON.stringify(hashTable, null, 2));

module.exports = HashTable;