## 16 - Binary Search Trees and k-Ary Trees

### How to Use

To start this app, clone this repo from 

  `https://github.com/kerrynordstrom/16-trees-and-binary-search-trees`

install all necessary packages with 

  `npm install`

And run any available tests with

  `npm run test`

### Binary Search Tree Structure

This program is built with a simple binary search tree which organizes nodes in that the left children are lesser than their parent and right children are greater than their parent.  In this program, it includes methods for finding, inserting (as a leaf), and removing a node.


                                5
                              /   \
                             2     7
                            / \     \
                           1   3     8
                                      \
                                       11
                                       / \
                                      10  12  
                                           \
                                            16
                                            / \
                                           13 15 
### k-Ary Tree Structure

                                11
                              / | \
                             12 13 14
                              / | \
                             15 16 17      
                               / \  \
                              18 18 18

### Modules

This program exports two modules:

- Binary search tree class constructor and its methods: find, insert, and remove.
- k-Ary tree constructor and its prototype methods: find, concatToString, and pushToArray.

### Binary Search Tree Methods

#### Find Node

This method finds an individual nodde which in the case of the above binary search tree will produce a result by halving the search each time.  

Example: If fourteen is the value to be found, it will follow `5, 2` and then return `3` as 3 is less than 5 and greater than 2.  

#### Big O

Time: O(H) of the side it searches
Space: O(logn)

#### Insert

This method will insert a single node (as a leaf) and in the case of the above binary search tree will produce a result by following the number of connections necessary to insert itself where it is greater or less than an existing node value.  It will not store duplicates.

Example: If 100 is the value to insert, the result will be that it follows the tree all the way down the right side, makes a new node, and attaches itself to the right of 15 `5, 7, 8, 11, 12, 16, 15, 100`


#### Big O

Time: O(H) where H is the number of connections it *may* need based on the height of the table
Space: O(nlogn)


#### Remove

This method will remove a node and replace its current value and connections with the minimum value found on the right side of the tree.  It will search to the bottom of the tree and find this minimum value, store it in a temporary variable, then reassign the removed node's value and connections to maintain the original structure where possible.

Example: If 11 is to be deleted, it will make a copy of the minimum value on the right side of the tree shown above (12) and will replace the 11 node with that of 12, including the former left of 11 (10) and the right of 12 (16). 
       

#### Big O

Time: O(H) where H is the number of connections it *may* need based on the height of the table
Space: O(nlogn)


### k-Ary Methods

#### Find Node

This method uses an in order traversing method which in the case of the above binary tree will produe a result of one node value found via the pattern of left to root to right.  

Example: If fourteen is the value to be found, it will follow `12, 11, 14` and then return `14`

#### Big O

Time: O(n)
Space: O(nlogn)

#### concatToString

This method uses a pre order order traversing method which in the case of the above binary tree will produe as result, a string concatenating all nodes succeeding the root value passed as argument with a line break in between each value.  

Example: If eleven is the argument root node, the result will be `'11\n12\n13\n14\n15\n11'`

        If fifteen is the argument root node, the result will be `'15\n11'`

#### Big O

Time: O(n)
Space: O(nlogn)


#### pushToArray

This method uses a post order order traversing method which in the case of the above binary tree will produe as result, an array which indexes all nodes succeeding the root value passed as argument. 

Example: If eleven is the argument root node, the result will be `[12, 14, 11, 15, 13, 11]`

        If duplicateEleven is the argument root node, the result will be `[11]`

#### Big O

Time: O(n)
Space: O(nlogn)

### Binary Search Tree Tests

#### Insert

-Insert should add new node following binary search tree architecture, which places smaller values to the left and larger values to the right of any given node.
-Insert should throw type error if argument not integer.
-Insert should throw type error if argument is empty.

#### Find

-Find should locate and return individual node\'s value.
-Find should throw type error if argument left empty/is null.
-Find should throw type error if argument not integer.

#### Remove

-Remove should locate and remove individual node\'s value.
-Remove should be undefined if no value passed to method.
-Remove should be undefined if empty string passed to method.
-Remove should locate and remove node\'s value, even if it has two children and will preserve nodes that are within sub-trees of this node.

### k-Ary Tests

#### Find
-Find method should traverse tree and return the first iteration of the node even if there is another iteration elsewhere in the tree
-Find method should traverse tree and return null if value is not present
-Find method should traverse tree and return null if no value provided

#### To String
-String method should traverse tree and create string composed of all values with a newline break in between each value.
-String method should traverse tree beginning at intermediate root node, then create string composed of all values with a newline break in between each value.
-String method should provide empty string as argument even if nothing is passed to function initially.


#### To Array
-Array method should traverse tree and push node values to array
-Array method should be able to take in populated array, then traverse tree and push remaining values it finds to the end of this argument array
-Array method should return an array with a single value if no children are present



