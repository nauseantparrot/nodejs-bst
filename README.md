# nodejs-bst

A fast and simple library for binary search tree data structures (BST) manipulation.

[![Build Status](https://travis-ci.org/nickogar97/nodejs-bst.svg?branch=master)](https://travis-ci.org/nickogar97/nodejs-bst)
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
const errBst1 = new BST('foo') // Error: The passed argument to the Node constructor is not valid
const errBst2 = new BST([3, 'foo']) // Error: You must pass a number to the addNumber function
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
bst.addNumber() // Error: You must pass a number to the addNumber function
bst.addNumber('foo') // Error: You must pass a number to the addNumber function
bst.addMultiple() // Error: You must pass an array to the addMultiple function
bst.addMultiple(['foo', 'bar']) // Error: You must pass a number to the addNumber function
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
bst.removeNumber() // Error: You must pass a number to the removeNumber function
bst.removeNumber('foo') // Error: You must pass a number to the removeNumber function
bst.removeMultiple() // Error: You must pass an array to the removeMultiple function
bst.removeMultiple([4, 'bar']) // Error: You must pass a number to the removeNumber function
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
bst.hasNumber() // Error: You must pass a number to the hasNumber function
bst.hasNumber('foo') // Error: You must pass a number to the hasNumber function
```

### Convertion

#### As a string

The toString and inspect functions are used to parse Javascript objects as string, nodejs-bst provides an override for this functions to offer a visual reference of the data in a bst structure and preventing the common [objec type] result.

```javascript
// Import module
const BST = require('nodejs-bst')

const bst = new BST([5, 2, 1, 7, 9])

console.log(bst) // { 5: [ { 2: [ { 1: [] }, {} ] }, { 7: [ {}, { 9: [] } ] } ] }
```