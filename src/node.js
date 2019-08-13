// @flow

/**
 * @protected
 * @class
 * @name Node
 * @description Represents each node in the binary search tree data structure
 * @author Nickolas Garcia <gfelipenickolas@gmail.com>
 * @version 1.0.5
 * @since 1.0.0
 */
class Node {

    /**
     * @property {Node} [leftNode] Reference of the left hand child node
     */
    leftNode: ?Node

    /**
     * @property {Node} [parentNode] Reference of the predecessor node
     */
    parentNode: ?Node

    /**
     * @property {Node} [rightNode] Reference of the right hand child node
     */
    rightNode: ?Node

    /**
     * @property {number} [value] Current node value
     */
    value: ?number

    _appendChild: (node: Node) => void

    _appendNode: (node: Node) => void

    _hasChildNodes: () => boolean

    _removeChildNode: (node: Node) => ?Node

    _removeCurrentNode: () => void

    _setCurrentNode: (node: Node) => void

    _updateParent: (parent: Node) => void

    addMultiple: (numbers: number[]) => void

    addNumber: (number: number) => void

    static clone: (node: Node) => Node

    getInorderPath: () => number[]

    getPostorderPath: () => number[]

    getPreorderPath: () => number[]

    hasNumber: (number: number) => boolean

    isFullBinary: () => boolean

    removeMultiple: (numbers: number[]) => void
    
    removeNumber: (number: number) => void

    /**
     * @constructor Node
     * @param {(number|number[])} [args] Initial structure values
     * @param {Node} [parent] Object's parent node
     */
    constructor (args: ?(number | number[]), parent: ?Node) {
        this.leftNode = null
        this.parentNode = null
        this.rightNode = null
        this.value = null

        if (args != null) {
            if (typeof args === 'number') {
                this.value = args
            } else if (Array.isArray(args) && args.every(number => typeof number === 'number')) {
                this.addMultiple(args)
            } else {
                throw new Error('Node constructor argument must be a single or array of numbers')
            }
        }
        if (parent != null) {
            if (!(parent instanceof Node)) {
                throw new Error('Node constructor parent argument must be a node object')
            }
            this.parentNode = parent
        }

        // Private functions
        this._appendChild = this._appendChild.bind(this)
        this._appendNode = this._appendNode.bind(this)
        this._hasChildNodes = this._hasChildNodes.bind(this)
        this._removeChildNode = this._removeChildNode.bind(this)
        this._removeCurrentNode = this._removeCurrentNode.bind(this)
        this._setCurrentNode = this._setCurrentNode.bind(this)
        this._updateParent = this._updateParent.bind(this)

        // Public functions
        this.addMultiple = this.addMultiple.bind(this)
        this.addNumber = this.addNumber.bind(this)
        this.getInorderPath = this.getInorderPath.bind(this)
        this.getPostorderPath = this.getPostorderPath.bind(this)
        this.getPreorderPath = this.getPreorderPath.bind(this)
        this.hasNumber = this.hasNumber.bind(this)
        this.isFullBinary = this.isFullBinary.bind(this)
        this.removeMultiple = this.removeMultiple.bind(this)
        this.removeNumber = this.removeNumber.bind(this)
    }

    /**
     * @private
     * @method
     * @name _appendChild
     * @description Add a node object as child of the current one
     * @param {Node} node Node object to be added
     * @return {undefined}
     */
    _appendChild (node: Node): void {
        const {leftNode, rightNode, value} = this

        // Validate node argument
        if (!(node instanceof Node)) {
            throw new Error('The _appendChild method argument must not be empty')
        }

        // Case when the node object value is empty
        if (node.value == null) {
            return
        }
        // Case when the current node value is empty
        if (value == null) {
            throw new Error('A node object can not be appended as a child to a node without value')
        }
        // Case when the node value is equal to the current node value
        if (node.value === value) {
            return
        }

        if (node.value < value) {
            if (leftNode == null) {
                this.leftNode = node
                this.leftNode._updateParent(this)

                return
            }
            if (leftNode instanceof Node) {
                leftNode._appendChild(node)
            }

            return
        }
        if (node.value > value) {
            if (rightNode == null) {
                this.rightNode = node
                this.rightNode._updateParent(this)

                return
            }
            if (rightNode instanceof Node) {
                rightNode._appendChild(node)
            }
        }
    }

    /**
     * @private
     * @method
     * @name _appendNode
     * @description Adds a node to the structure
     * @param {Node} node Node object to be added
     * @returns {undefined}
     */
    _appendNode (node: Node): void {
        const {value} = this

        if (node == null) {
            throw new Error('The _appendNode method argument must not be empty')
        }
        if (!(node instanceof Node)) {
            throw new Error('The _appendNode method argument must be a node object')
        }

        // Case when the current node value is empty
        if (value == null) {
            this._setCurrentNode(node)

            return
        }
        this._appendChild(node)
    }

    /**
     * @private
     * @function
     * @name _hasChildNodes
     * @description Check if the current node has child nodes
     * @returns {boolean} Indicates if the current node has child nodes
     */
    _hasChildNodes (): boolean {
        const {leftNode, rightNode} = this

        if (leftNode != null) {
            if (leftNode instanceof Node) {
                return true
            }
            throw new Error('The children of a node must be node objects')
        }

        if (rightNode != null) {
            if (rightNode instanceof Node) {
                return true
            }
            throw new Error('The children of a node must be node objects')
        }

        return false
    }

    /**
     * @private
     * @function
     * @name _removeChildNode
     * @description Removes a child node from the current node if it does exist
     * @param {Node} node Node instance to be removed
     * @returns {Node} The removed child node
     */
    _removeChildNode (node: Node): ?Node {
        const {leftNode, rightNode} = this

        if (!(node instanceof Node)) {
            throw new Error('The _removeChildNode method node argument must be a node object')
        }

        // Current node value must not be compare because it is empty at this point
        if (leftNode != null) {
            if (!(leftNode instanceof Node)) {
                throw new Error('The children of a node must be node objects')
            }

            if (node.value === leftNode.value) {
                const clone = Node.clone(leftNode)

                this.leftNode = null

                return clone
            }
        }
        if (rightNode != null) {
            if (!(rightNode instanceof Node)) {
                throw new Error('The children of a node must be node objects')
            }

            if (node.value === rightNode.value) {
                const clone = Node.clone(rightNode)

                this.rightNode = null

                return clone
            }
        }
    }

    /**
     * @private
     * @method
     * @name _removeCurrentNode
     * @description Set the current node value to null and reorganize the children nodes
     * @returns {undefined}
     */
    _removeCurrentNode (): void {
        const clone = Node.clone(this)
        
        this.value = null

        if (!this._hasChildNodes()) {
            return
        }

        if (clone.rightNode != null) {
            const removedNode = this._removeChildNode(clone.rightNode)

            if (removedNode != null) {
                this._appendNode(removedNode)
            }
        }
        if (clone.leftNode != null) {
            const removedNode = this._removeChildNode(clone.leftNode)

            if (removedNode != null) {
                this._appendNode(removedNode)
            }
        }
    }

    /**
     * @private
     * @method
     * @name _setCurrentNode
     * @description Sets the current node object
     * @param {Node} node Node to be assigned to the current object
     * @returns {undefined}
     */
    _setCurrentNode (node: Node): void {
        if (!(node instanceof Node)) {
            throw new Error('The _setCurrentNode method node argument must be a node object')
        }

        this.value = node.value

        if (node.rightNode != null) {
            this._appendNode(node.rightNode)
        }
        if (node.leftNode != null) {
            this._appendNode(node.leftNode)
        }
    }

    /**
     * @private
     * @method
     * @name _updateParent
     * @description Update the parent reference of the current node
     * @param {Node} parent Object's parent node
     * @returns {undefined}
     */
    _updateParent (parent: Node): void {
        if (!(parent instanceof Node)) {
            throw new Error('The _updateParent method parent argument must be a node object')
        }
        this.parentNode = parent
    }

    /**
     * @method
     * @name addMultiple
     * @description Add multiple numbers to the current data structure
     * @param {number[]} numbers Array of numbers to be added to the structure
     * @returns {undefined}
     */
    addMultiple (numbers: number[]): void {
        if (!Array.isArray(numbers) && numbers.every(number => typeof number === 'number')) {
            throw new Error('The addMultiple method numbers argument must be an array of number')
        }

        for (let idx = 0; idx < numbers.length; idx++) {
            this.addNumber(numbers[idx])
        }
    }

    /**
     * @method
     * @name addNumber
     * @description Add a single number to the current data structure
     * @param {number} number Value to be added to the structure
     * @returns {undefined}
     */
    addNumber (number: number): void {
        if (typeof number !== 'number') {
            throw new Error('The addNumber method number argument must be a number')
        }

        // Set the initial value of the node if it is null
        if (this.value == null) {
            this.value = number

            return
        }

        // Values cannot get duplicated in the structure
        if (this.value === number) {
            return
        }

        // Case when number is less than the current node value
        if (number < this.value) {
            if (this.leftNode != null) {
                if (!(this.leftNode instanceof Node)) {
                    throw new Error('The children of a node must be node objects')
                }

                this.leftNode.addNumber(number)

                return
            }
            this.leftNode = new Node(number, this)

            return
        }
        // Else
        if (this.rightNode != null) {
            if (!(this.rightNode instanceof Node)) {
                throw new Error('The children of a node must be node objects')
            }

            this.rightNode.addNumber(number)

            return
        }
        this.rightNode = new Node(number, this)
    }

    /**
     * @static
     * @function
     * @name clone
     * @description Returns a clone of a node object
     * @param {Node} node Node object to clone
     * @returns {Node} Clone object
     */
    static clone (node: Node): Node {
        if (!(node instanceof Node)) {
            throw new Error('The clone function argument must be a node object')
        }

        return Object.assign(new Node(), {...node})
    }

    /**
     * @function
     * @name getInorderPath
     * @description Returns the data structure inorder path
     * @returns {number[]} Data structure's inorder path
     */
    getInorderPath(): number[] {
        // Validate current value
        if (this.value != null) {
            let leftPath = []
            let rightPath = []

            if (this.leftNode != null) {
                leftPath = this.leftNode.getInorderPath()
            }
            if (this.rightNode != null) {
                rightPath = this.rightNode.getInorderPath()
            }
            
            return [
                ...leftPath,
                this.value,
                ...rightPath
            ]
        }
        return []
    }

    /**
     * @function
     * @name getPostorderPath
     * @descripcion Returns the data structure postorder path
     * @returns {number[]} Data structure's postorder path
     */
    getPostorderPath(): number[] {
        // Validate current value
        if (this.value != null) {
            let leftPath = []
            let rightPath = []

            if (this.leftNode != null) {
                leftPath = this.leftNode.getPostorderPath()
            }
            if (this.rightNode != null) {
                rightPath = this.rightNode.getPostorderPath()
            }
            
            return [
                ...leftPath,
                ...rightPath,
                this.value
            ]
        }
        return []
    }

    /**
     * @function
     * @name getPreorderPath
     * @description Returns the data structure preorder path
     * @returns {number[]} Data structure's preorder path
     */
    getPreorderPath(): number[] {
        // Validate current value
        if (this.value != null) {
            let leftPath = []
            let rightPath = []

            if (this.leftNode != null) {
                leftPath = this.leftNode.getPreorderPath()
            }
            if (this.rightNode != null) {
                rightPath = this.rightNode.getPreorderPath()
            }
            
            return [
                this.value,
                ...leftPath,
                ...rightPath
            ]
        }
        return []
    }

    /**
     * @function
     * @name hasNumber
     * @description Check if the current data structure has a number
     * @param {number} number Number to search in the data structure
     * @returns {boolean} Indicate if the number is in the data structure
     */
    hasNumber (number: number): boolean {
        if (typeof number !== 'number') {
            throw new Error('The hasNumber function argument must be a number')
        }

        if (this.value == null) {
            return false
        }
        if (this.value === number) {
            return true
        }

        // Case when number is less than the current node value
        if (number < this.value) {
            if (this.leftNode != null) {
                return this.leftNode.hasNumber(number)
            }

            return false
        }
        // Else
        if (this.rightNode == null) {
            return false
        }

        return this.rightNode.hasNumber(number)
    }

    /**
     * @function
     * @name isFullBinary
     * @description Check if the structure is a full binary search tree
     * @returns {boolean} Indicate if the structure is a full binary tree
     */
    isFullBinary (): boolean {
        const {leftNode, rightNode, value} = this

        if (value == null) {
            return false
        }

        if (leftNode == null && rightNode == null) {
            return true
        }
        
        if (leftNode != null && rightNode != null) {
            return leftNode.isFullBinary() && rightNode.isFullBinary()
        }

        return false
    }

    /**
     * @method
     * @name removeMultiple
     * @description Removes multiple numbers from the current data structure
     * @param {number[]} numbers Array of numbers to be removed from the structure
     * @returns {undefined}
     */
    removeMultiple (numbers: number[]): void {
        if (!Array.isArray(numbers)) {
            throw new Error('The removeMultiple method argument must be an array')
        }
        
        for (let idx = 0; idx < numbers.length; idx++) {
            this.removeNumber(numbers[idx])
        }
    }

    /**
     * @method
     * @name removeNumber
     * @description Removes a single number from the current data structure
     * @param {number} number Number to be removed from the structure
     * @returns {undefined}
     */
    removeNumber (number: number): void {
        const {leftNode, rightNode, value} = this

        if (typeof number !== 'number') {
            throw new Error('The removeNumber method argument must be a number')
        }

        // Check if the current node value is a number
        if (typeof value !== 'number') {
            throw new Error('The value of a node must be number')
        }

        if (!this.hasNumber(number)) {
            return
        }

        // Case when then number is equal to the current node value
        if (value === number) {
            this._removeCurrentNode()

            return
        }

        // Case when the number is less than the current node value
        if (number < value) {
            if (leftNode != null) {
                leftNode.removeNumber(number)

                return
            }
        }
        // Else
        if (rightNode != null) {
            rightNode.removeNumber(number)
        }
    }

}

/**
 * @module node
 */
module.exports = Node