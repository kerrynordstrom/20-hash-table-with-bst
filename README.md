![cf](https://i.imgur.com/7v5ASc8.png) Lab 20: Binary Search Tree and Hash Table
======

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Open a pull request to this repository
* Submit on canvas a question and observation, how long you spent, and a link to your pull request

## Configuration 
Configure the root of your repository with the following files and directories. Thoughfully name and organize any aditional configuration or module files.
* **README.md** - contains documentation
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file 
* **.eslintrc** - contains the course linter configuratoin
* **.eslintignore** - contains the course linter ignore configuration
* **package.json** - contains npm package config
* **model/** - contains model definitions
* **\_\_test\_\_/** - contains test modules

## Feature Tasks  
#### BinarySearchTree
Create a `BinarySearchTree` constructor using ES6 class syntax or Javasript Contstructors
* Add an `insert` method that appends a node to the BST
* Add a `remove` method that removes a node from a BST

#### HashTable
* Create a `HashTable` constructor using ES6 class syntax or Javascript Constructors
* Add a `_hash` method that computes a keys hash
* Add a `set` method that stores a key value pair
* Add a `get` method that retrieves a a value for a given key
* Add a `remove` method that remvoves a key value pair from the HashTable
* Each bucket index should store collisions in a BST

## Tests
Unit test each method of your constructors. 

## Documentation
In your README.md describe the exported values of each module you have defined. Every function description should include it's airty (expected number of paramiters), the expected data for each paramiter (data-type and limitations), and it's behavior (for both valid and invalued use). Feel free to write any additional information in your README.md.
