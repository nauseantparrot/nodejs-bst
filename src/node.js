/**
 * @class
 * @name Node
 * @description Represents each node in the binary search tree data structure
 * @author Nickolas Garcia <gfelipenickolas@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 * @property {Node} leftNode Left hand node
 * @property {Node} rightNode Right hand node
 * @property {number} value Value of the node instance
 */
class Node {

    /**
     * @constructor Node
     * @param {*} args Single number, array of numbers or undefined value to initialize structure with
     */
    constructor(args) {
        this.value = null
        this.leftNode = null
        this.rightNode = null

        if (typeof args === 'number') {
            this.value = args
        }   else if (Array.isArray(args)) {
            this.addMultiple(args)
        }   else if (typeof args !== 'undefined') {
            throw new Error('The passed argument to the Node constructor is not valid')
        }

        this.addMultiple = this.addMultiple.bind(this)
        this.addNumber = this.addNumber.bind(this)
        this.hasNumber = this.hasNumber.bind(this)
        this.inspect = this.inspect.bind(this)
        this.removeMultiple = this.removeMultiple.bind(this)
        this.removeNumber = this.removeNumber.bind(this)
        this.toString = this.toString.bind(this)
    }

    /**
     * @method
     * @name addMultiple
     * @param {Array} arrNumbers Array of numbers to be added to the structure
     */
    addMultiple(arrNumbers) {
        if (!Array.isArray(arrNumbers)) {
            throw new Error('You must pass an array to the addMultiple function')
        }

        for (let i = 0; i < arrNumbers.length; i++) {
            this.addNumber(arrNumbers[i])
        }
    }

    /**
     * @method
     * @name addNumber
     * @param {number} number Value to be added to the structure
     */
    addNumber(number) {
        if (typeof number !== 'number') {
            throw new Error('You must pass a number to the addNumber function')
        }

        // Set the initial value of the node if it is null
        if (this.value === null) {
            this.value = number
            return
        }

        // Values cannot get duplicated in the structure
        if (this.value === number) {
            return
        }

        if (number < this.value) {
            if (this.leftNode === null) {
                this.leftNode = new Node(number)
                return
            }
            this.leftNode.addNumber(number)
        }   else {
            if (this.rightNode === null) {
                this.rightNode = new Node(number)
                return
            }
            this.rightNode.addNumber(number)
        }
    }

    /**
     * @method
     * @name hasNumber
     * @param {number} number Number to search in the data structure
     */
    hasNumber(number) {
        if (typeof number !== 'number') {
            throw new Error('You must pass a number to the hasNumber function')
        }

        if (this.value === number) {
            return true
        }

        if (number < this.value) {
            if (this.leftNode === null) {
                return false
            }
            return this.leftNode.hasNumber(number)
        }   else {
            if (this.rightNode === null) {
                return false
            }
            return this.rightNode.hasNumber(number)
        }
    }

    /**
     * @method
     * @name inspect
     * @override
     */
    inspect() {
        return this.toString()
    }

    /**
     * @method
     * @name removeMultiple
     * @param {Array} arrNumbers Array of numbers to be removed from the structure
     */
    removeMultiple(arrNumbers) {
        if (!Array.isArray(arrNumbers)) {
            throw new Error('You must pass an array to the removeMultiple function')
        }
        
        // ...
    }

    /**
     * @method
     * @name removeNumber
     * @param {number} number Number to be removed from the structure
     */
    removeNumber(number) {
        if (typeof number !== 'number') {
            throw new Error('You must pass a number to the removeNumber function')
        }

        if (!this.hasNumber(number)) {
            return
        }

        if (this.value === number) {
            // ...
        }

        if (number < this.value) {
            if (this.leftNode !== null && this.leftNode.value === number) {
                // ...
            }
        }

        if (number > this.value) {
            if (this.leftNode !== null && this.leftNode.value === number) {
                // ...
            }
        }
    }

    /**
     * @method
     * @name toString
     * @override
     */
    toString() {
        if (this.value === null) {
            return '{}'
        }

        if (this.leftNode === null && this.rightNode === null) {
            return `{ ${this.value} }`
        }

        if (this.leftNode !== null && this.rightNode === null) {
            return `{ ${this.value}: ${this.leftNode}, {} }`
        }

        if (this.leftNode === null && this.rightNode !== null) {
            return `{ ${this.value}: {}, ${this.rightNode} }`
        }

        if (this.leftNode !== null && this.rightNode !== null) {
            return `{ ${this.value}: ${this.leftNode}, ${this.rightNode} }`
        }
    }

}

/**
 * @module node
 */
module.exports = Node