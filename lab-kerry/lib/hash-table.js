'use strict';


const BinarySearchTree = require('./binary-search-tree');

class HashTable {
  constructor(capacity = 100) { 
    this._capacity = capacity;
    this._buckets = new Array(capacity);
  }
  // this function will be very prone to collisions
  // // don't use in a production envionment
  _makeHash(key) {
    if (typeof key !== 'string')
      throw new TypeError('__ERROR__ key should be a string');

    let rawHash = 0;

    for (let i in key) {
      rawHash += key.charCodeAt(i);
    }

    return rawHash % this._capacity;
  }

  set(key, htValue) {
    let hash = this._makeHash(key);
  
		
    //here, the bucket is empty
    if (!this._buckets[hash]) {
      this._buckets[hash] = new BinarySearchTree();
      this._buckets[hash].insert(key, htValue);
      return this;
    }
    //this bucket is not empty
    let node = this._buckets[hash].find(key);

    if (node) {
      node.value = htValue; //updating this value
      return this;
    }

    //if we are not updating a key, we created a new element in the linked list
    this._buckets[hash].insert(key, htValue);

    return this;
  }



  get(key) {
    let hash = this._makeHash(key);

    if (!this._buckets[hash]) {
      return null;
    }

    let node = this._buckets[hash].find(key);

    if (node)
      return node.value;
    else
      return null;

  }
	
  delete(key) {
    let hash = this._makeHash(key);

    if(!this._buckets[hash])
      return false;
		
    let node = this._buckets[hash].find(key);
    // console.log(node);

    if(node) {
      this._buckets[hash].remove(key);
    }
  }
}

let hashTable = new HashTable();
hashTable.set('foo', 5);
hashTable.set('bar', 2);
hashTable.set('baz', 1);
hashTable.set('baphomet', 22);
hashTable.set('bolt', 3);
hashTable.set('bath', 7);
hashTable.set('barth', 8);
hashTable.set('finch', 11);
hashTable.set('grinch', 10);
hashTable.set('mensch', 9);
hashTable.set('narrator', 16);
hashTable.set('xylophone', 12);
hashTable.set('car', 13);
hashTable.set('crash', 17);
hashTable.set('harold', 4);


// console.log(JSON.stringify(hashTable, null, 2));

// console.log(hashTable.get('bath'));

hashTable.delete('xylophone');


console.log(JSON.stringify(hashTable, null, 2));


module.exports = HashTable;