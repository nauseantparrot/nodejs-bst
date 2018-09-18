/**
 * @class
 * @name Node
 * @description Represents each node in the binary search tree data structure
 * @author Nickolas Garcia <gfelipenickolas@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 * @property {Node} leftNode Left hand node
 * @property {Node} parentNode Parent node
 * @property {Node} rightNode Right hand node
 * @property {number} value Value of the node instance
 */
class Node {

    /**
     * @constructor Node
     * @param {*} args Single number, array of numbers or undefined value to initialize structure with
     * @param {Node} parent Parent node of the instance
     */
    constructor(args, parent) {
        this.leftNode = null
        this.parentNode = null
        this.rightNode = null
        this.value = null

        if (typeof args === 'number') {
            this.value = args
        }   else if (Array.isArray(args)) {
            this.addMultiple(args)
        }   else if (typeof args !== 'undefined') {
            throw new Error('The passed argument to the Node constructor is not valid')
        }

        if (typeof parent !== 'undefined' && parent instanceof Node) {
            this.parentNode = parent
        }

        this._appendNode = this._appendNode.bind(this)
        this._hasChildNodes = this._hasChildNodes.bind(this)
        this._isRoot = this._isRoot.bind(this)
        this._removeChildNode = this._removeChildNode.bind(this)
        this._replaceChildNode = this._replaceChildNode.bind(this)
        this.addMultiple = this.addMultiple.bind(this)
        this.addNumber = this.addNumber.bind(this)
        this.hasNumber = this.hasNumber.bind(this)
        this.inspect = this.inspect.bind(this)
        this.removeMultiple = this.removeMultiple.bind(this)
        this.removeNumber = this.removeNumber.bind(this)
        this.toJson = this.toJson.bind(this)
        this.toString = this.toString.bind(this)
        this.toXml = this.toXml.bind(this)
    }

    /**
     * @private
     * @method
     * @name _appendNode
     * @param {Node} node
     */
    _appendNode(node) {
        if (typeof node == 'undefined' || !(node instanceof Node)) {
            throw new Error('You must pass a node instance as argument to the _appendNode method')
        }

        if (node.value < this.value) {
            if (this.leftNode === null) {
                this.leftNode = node
                return
            }
            this.leftNode._appendNode(node)
            return
        }   else if (node.value > this.value) {
            if (this.rightNode === null) {
                this.rightNode = node
                return
            }
            this.rightNode._appendNode(node)
            return
        }
    }

    /**
     * @private
     * @function
     * @name _hasChildNodes
     * @returns {boolean}
     */
    _hasChildNodes() {
        if (this.leftNode !== null || this.rightNode !== null) {
            return true
        }
        return false
    }

    /**
     * @private
     * @function
     * @name _isRoot
     * @returns {boolean}
     */
    _isRoot() {
        if (this.parentNode === null) {
            return true
        }
        return false
    }

    /**
     * @private
     * @method
     * @name _removeChildNode
     * @param {Node} node
     */
    _removeChildNode(node) {
        if (typeof node === 'undefined' || !(node instanceof Node)) {
            throw new Error('You must pass a node instance as argument to the _removeChildNode method')
        }

        if (this.leftNode !== null && this.leftNode.value === node.value) {
            this.leftNode = null
            return this
        }
        if (this.rightNode !== null && this.rightNode.value === node.value) {
            this.rightNode = null
            return this
        }
    }

    /**
     * @private
     * @method
     * @name _replaceChildNode
     * @param {Node} node
     * @param {Node} replacement
     */
    _replaceChildNode(node, replacement) {
        if (typeof node === 'undefined' || !(node instanceof Node)) {
            throw new Error('You must pass a node instance as node argument of the _removeChildNode method')
        }
        if (typeof replacement === 'undefined' || !(replacement instanceof Node)) {
            throw new Error('You must pass a node instance as replacement argument of the _removeChildNode method')
        }

        if (this.leftNode !== null && this.leftNode.value === node.value) {
            this.leftNode = replacement
            return this
        }
        if (this.rightNode !== null && this.rightNode.value === node.value) {
            this.rightNode = replacement
            return this
        }
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
                this.leftNode = new Node(number, this)
                return
            }
            this.leftNode.addNumber(number)
        }   else {
            if (this.rightNode === null) {
                this.rightNode = new Node(number, this)
                return
            }
            this.rightNode.addNumber(number)
        }
    }

    /**
     * @function
     * @name hasNumber
     * @param {number} number Number to search in the data structure
     * @returns {boolean}
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
     * @function
     * @name inspect
     * @returns {string}
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

        if (this._isRoot && this.value === number) {
            if (this._hasChildNodes) {
                if (this.rightNode !== null) {
                    // ...
                }
            }
            this = new Node()
            return
        }

        if (number < this.value) {
            if (this.leftNode.value === number) {
                // ...
            }
        }

        if (number > this.value) {
            if (this.rightNode.value === number) {
                // ...
            }
        }
    }

    /**
     * @function
     * @name toJson
     * @returns {string}
     */
    toJson() {
        // ...
    }

    /**
     * @function
     * @name toString
     * @returns {string}
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

    /**
     * @function
     * @name toXml
     * @returns {string}
     */
    toXml() {
        // ...
    }

}

/**
 * @module node
 */
module.exports = Node