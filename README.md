# nodejs-bst

A fast and simple library for binary search tree data structures (BST) manipulation.

[![Build Status](https://travis-ci.org/nauseantparrot/nodejs-bst.svg?branch=master)](https://travis-ci.org/nauseantparrot/nodejs-bst)
[![npm version](https://img.shields.io/npm/v/nodejs-bst.svg?style=flat-square)](https://www.npmjs.com/package/nodejs-bst)
[![npm downloads](https://img.shields.io/npm/dm/nodejs-bst.svg?style=flat-square)](https://www.npmjs.com/package/nodejs-bst)

## Instalation

To install the latest version using yarn:
```
yarn add nodejs-bst
```
Using npm:
```
npm install --save nodejs-bst
```

## The Gist

### Instantiation

```javascript
// Import module
const BST = require('nodejs-bst')

// Success
const emptyBst = new BST() // {}
const singleBst = new BST(7) // { 7: [] }
const multiBst = new BST([3, 6, 1, 9]) // { 3: [ { 1: [] }, { 6: [ {}, { 9: [] } ] } ] }

// Failure
const errBst1 = new BST('foo') // Error: Node constructor argument must be a single or array of numbers
const errBst2 = new BST([3, 'foo']) // Error: Node constructor argument must be a single or array of numbers
```

### Append

```javascript
// Import module
const BST = require('nodejs-bst')

const bst = new BST()

// Success
bst.addNumber(4) // { 4: [] }
bst.addMultiple([3, 7]) // { 4: [ { 3: [] }, { 7, [] } ] }

// Failure
bst.addNumber() // Error: The addNumber method number argument must be a number
bst.addNumber('foo') // Error: The addNumber method number argument must be a number
bst.addMultiple() // Error: The addMultiple method numbers argument must be an array of number
bst.addMultiple(['foo', 'bar']) // Error: The addMultiple method numbers argument must be an array of number
```

### Removal

```javascript
// Import module
const BST = require('nodejs-bst')

const bst = new BST([5, 2, 1, 7, 9]) // { 5: [ { 2: [ { 1: [] }, {} ] }, { 7: [ {}, { 9: [] } ] } ] }

// Success
bst.removeNumber(2) // { 5: [ { 1: [] }, { 7: [ {}, { 9: [] } ] } ] }
bst.removeMultiple([5, 7]) // { 9: [ { 1: [] }, {} ] }

// Failure
bst.removeNumber() // Error: The removeNumber method argument must be a number
bst.removeNumber('foo') // Error: The removeNumber method argument must be a number
bst.removeMultiple() // Error: The removeMultiple method argument must be an array
bst.removeMultiple([4, 'bar']) // Error: The removeMultiple method argument must be an array
```

### Verify

```javascript
// Import module
const BST = require('nodejs-bst')

const bst = new BST(4)

// Success
bst.hasNumber(7) // False
bst.hasNumber(4) // True
bst.isFullBinary() // True

// Failure
bst.hasNumber() // Error: The hasNumber function argument must be a number
bst.hasNumber('foo') // Error: The hasNumber function argument must be a number
```

### Inorder path

```javascript
// Import module
const BST = require('nodejs-bst')

const bst = new BST([2,15,7,4,9])

// Inorder path
bst.getInorderPath() // [ 2, 4, 7, 9, 15 ]
```

### Preorder path

```javascript
// Import module
const BST = require('nodejs-bst')

const bst = new BST([15,9,8,5,11,10,21,17,18,25,24,28])

// Inorder path
bst.getPreorderPath() // [ 15, 9, 8, 5, 11, 10, 21, 17, 18, 25, 24, 28 ]
```
