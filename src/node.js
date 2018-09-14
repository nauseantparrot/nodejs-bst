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
 * @todo Write a remove number method
 * @todo Write a remove multiple numbers method
 * @todo Write an override of the object's toString method to show the data structure
 */
class Node {

    /**
     * @constructor Node
     * @param {number} number Value for the current node instance
     */
    constructor(number) {
        if (typeof number !== 'undefined' && typeof number !== 'number') {
            throw new Error('You must pass a number as argument of the Node constructor')
        }

        if (typeof number === 'undefined') {
            this.value = null
        }   else {
            this.value = number
        }

        this.leftNode = null
        this.rightNode = null

        this.addNumber = this.addNumber.bind(this)
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

        // Set the initial value of the tree's node if it is null
        if (this.value === null) {
            this.value = number
            return
        }

        // Values are not duplicated in the structure
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

}

/**
 * @module node
 */
module.exports = Node