

/**
 * @protected
 * @class
 * @name Node
 * @description Represents each node in the binary search tree data structure
 * @author Nickolas Garcia <gfelipenickolas@gmail.com>
 * @version 1.0.2
 * @since 1.0.0
 * @todo Add support for multiple arguments
 * @todo Add order methods (inorden, preorden, postorden)
 */
class Node {

    /**
     * @constructor Node
     * @param {(number|number[])} [args] Single number, array of numbers or undefined value
     * to initialize structure with
     * @param {Node} [parent] Parent node of the instance
     */


    /**
     * @property {Node} [rightNode] Reference of the right hand child node
     */


    /**
     * @property {Node} [leftNode] Reference of the left hand child node
     */
    constructor(args, parent) {
        this.leftNode = null;
        this.parentNode = null;
        this.rightNode = null;
        this.value = null;

        if (typeof args === 'number') {
            this.value = args;
        } else if (Array.isArray(args)) {
            this.addMultiple(args);
        } else if (typeof args !== 'undefined') {
            throw new Error('The passed argument to the Node constructor is not valid');
        }

        if (typeof parent !== 'undefined' && parent instanceof Node) {
            this.parentNode = parent;
        }

        this._appendNode = this._appendNode.bind(this);
        this._hasChildNodes = this._hasChildNodes.bind(this);
        this._removeChildNode = this._removeChildNode.bind(this);
        this.addMultiple = this.addMultiple.bind(this);
        this.addNumber = this.addNumber.bind(this);
        this.hasNumber = this.hasNumber.bind(this);
        this.inspect = this.inspect.bind(this);
        this.isFullBinary = this.isFullBinary.bind(this);
        this.removeMultiple = this.removeMultiple.bind(this);
        this.removeNumber = this.removeNumber.bind(this);
        this.toJson = this.toJson.bind(this);
        this.toString = this.toString.bind(this);
    }

    /**
     * @private
     * @method
     * @name _appendNode
     * @description Adds a node instance as child of the current node
     * @param {Node} node Instance of the Node class to be added
     */


    /**
     * @property {number} [value] Current node value
     */


    /**
     * @property {Node} [parentNode] Reference of the predecessor node
     */
    _appendNode(node) {
        if (typeof node == 'undefined' || !(node instanceof Node)) {
            throw new Error('You must pass a node instance as argument to the _appendNode method');
        }

        // Case when the root node was removed
        if (this.value === null) {
            this.value = node.value;
            if (node.rightNode !== null) {
                this._appendNode(node.rightNode);
            }
            if (node.leftNode !== null) {
                this._appendNode(node.leftNode);
            }
            return;
        }

        if (node.value < this.value) {
            if (this.leftNode === null) {
                this.leftNode = node;
                return;
            }
            this.leftNode._appendNode(node);
            return;
        } else if (node.value > this.value) {
            if (this.rightNode === null) {
                this.rightNode = node;
                return;
            }
            this.rightNode._appendNode(node);
            return;
        }
    }

    /**
     * @private
     * @function
     * @name _hasChildNodes
     * @description Check if the current node has child nodes
     * @returns {boolean}
     */
    _hasChildNodes() {
        if (this.leftNode !== null || this.rightNode !== null) {
            return true;
        }
        return false;
    }

    /**
     * @private
     * @method
     * @name _removeChildNode
     * @description Removes a child node from the current node if it does exist
     * @param {Node} node Node instance to be removed
     */
    _removeChildNode(node) {
        if (typeof node === 'undefined' || !(node instanceof Node)) {
            throw new Error('You must pass a node instance as argument to the _removeChildNode method');
        }

        if (this.leftNode !== null && node.value === this.leftNode.value) {
            if (this.leftNode !== null && this.leftNode.value === node.value) {
                this.leftNode = null;
                return;
            }
        } else if (this.rightNode !== null && node.value === this.rightNode.value) {
            if (this.rightNode !== null && this.rightNode.value === node.value) {
                this.rightNode = null;
                return;
            }
        }
    }

    /**
     * @method
     * @name addMultiple
     * @description Add multiple numbers to the current data structure
     * @param {number[]} arrNumbers Array of numbers to be added to the structure
     */
    addMultiple(arrNumbers) {
        if (!Array.isArray(arrNumbers)) {
            throw new Error('You must pass an array to the addMultiple function');
        }

        for (let i = 0; i < arrNumbers.length; i++) {
            this.addNumber(arrNumbers[i]);
        }
    }

    /**
     * @method
     * @name addNumber
     * @description Add a single number to the current data structure
     * @param {number} number Value to be added to the structure
     */
    addNumber(number) {
        if (typeof number !== 'number') {
            throw new Error('You must pass a number to the addNumber function');
        }

        // Set the initial value of the node if it is null
        if (this.value === null) {
            this.value = number;
            return;
        }

        // Values cannot get duplicated in the structure
        if (this.value === number) {
            return;
        }

        if (number < this.value) {
            if (this.leftNode === null) {
                this.leftNode = new Node(number, this);
                return;
            }
            this.leftNode.addNumber(number);
        } else {
            if (this.rightNode === null) {
                this.rightNode = new Node(number, this);
                return;
            }
            this.rightNode.addNumber(number);
        }
    }

    /**
     * @static
     * @function
     * @name clone
     * @description Returns a clone of a Node object
     * @param {Node} node Node object to clone
     * @returns {Node}
     */
    static clone(node) {
        if (typeof node === 'undefined' || !(node instanceof Node)) {
            throw new Error('You must pass a Node object to the clone function');
        }

        return Object.assign(new Node(), node);
    }

    /**
     * @function
     * @name hasNumber
     * @description Check if the current data structure has a number
     * @param {number} number Number to search in the data structure
     * @returns {boolean}
     */
    hasNumber(number) {
        if (typeof number !== 'number') {
            throw new Error('You must pass a number to the hasNumber function');
        }

        if (this.value === number) {
            return true;
        }

        if (number < this.value) {
            if (this.leftNode === null) {
                return false;
            }
            return this.leftNode.hasNumber(number);
        } else {
            if (this.rightNode === null) {
                return false;
            }
            return this.rightNode.hasNumber(number);
        }
    }

    /**
     * @function
     * @name inspect
     * @description Returns the text to be shown when the object is parsed to string
     * @returns {string}
     * @override
     */
    inspect() {
        return this.toString();
    }

    /**
     * @function
     * @name isFullBinary
     * @description Check if the structure is a full binary search tree
     */
    isFullBinary() {
        if (this.leftNode === null && this.rightNode === null) {
            return true;
        }

        if (this.leftNode !== null && this.rightNode !== null) {
            return this.leftNode.isFullBinary() && this.rightNode.isFullBinary();
        }
        return false;
    }

    /**
     * @method
     * @name removeMultiple
     * @description Removes multiple numbers from the current data structure
     * @param {number[]} arrNumbers Array of numbers to be removed from the structure
     */
    removeMultiple(arrNumbers) {
        if (!Array.isArray(arrNumbers)) {
            throw new Error('You must pass an array to the removeMultiple function');
        }

        for (let i = 0; i < arrNumbers.length; i++) {
            this.removeNumber(arrNumbers[i]);
        }
    }

    /**
     * @method
     * @name removeNumber
     * @description Removes a single number from the current data structure
     * @param {number} number Number to be removed from the structure
     */
    removeNumber(number) {
        if (typeof number !== 'number') {
            throw new Error('You must pass a number to the removeNumber function');
        }

        if (!this.hasNumber(number)) {
            return;
        }

        if (this.value === number) {
            const clone = Node.clone(this);

            this.value = null;

            if (!this._hasChildNodes()) {
                return;
            }

            if (clone.rightNode !== null) {
                this._removeChildNode(clone.rightNode);
                this._appendNode(clone.rightNode);
            }
            if (clone.leftNode !== null) {
                this._removeChildNode(clone.leftNode);
                this._appendNode(clone.leftNode);
            }
            return;
        }

        if (number < this.value) {
            this.leftNode.removeNumber(number);
            return;
        }

        if (number > this.value) {
            this.rightNode.removeNumber(number);
            return;
        }
    }

    /**
     * @function
     * @name toJson
     * @description Returns a JSON object with the current structure data
     * @returns {Object}
     */
    toJson() {
        if (this.value === null) {
            return {};
        }

        if (this.leftNode === null && this.rightNode === null) {
            return { 'value': this.value };
        }

        if (this.leftNode !== null && this.rightNode === null) {
            return {
                'children': [this.leftNode.toJson(), null],
                'value': this.value
            };
        }

        if (this.leftNode === null && this.rightNode !== null) {
            return {
                'children': [null, this.rightNode.toJson()],
                'value': this.value
            };
        }

        if (this.leftNode !== null && this.rightNode !== null) {
            return {
                'children': [this.leftNode.toJson(), this.rightNode.toJson()],
                'value': this.value
            };
        }
    }

    /**
     * @function
     * @name toString
     * @description Returns the text to be shown when the object is parsed to string
     * @returns {string}
     * @override
     */
    toString() {
        if (this.value === null) {
            return '{}';
        }

        if (this.leftNode === null && this.rightNode === null) {
            return `{ ${this.value} }`;
        }

        if (this.leftNode !== null && this.rightNode === null) {
            return `{ ${this.value}: ${this.leftNode}, {} }`;
        }

        if (this.leftNode === null && this.rightNode !== null) {
            return `{ ${this.value}: {}, ${this.rightNode} }`;
        }

        if (this.leftNode !== null && this.rightNode !== null) {
            return `{ ${this.value}: ${this.leftNode}, ${this.rightNode} }`;
        }
    }

    /**
     * @function
     * @name toXml
     * @description Returns a XML string with the current structure data
     * @returns {string}
     */
    toXml() {
        if (this.value === null) {
            return '<node></node>';
        }

        if (this.leftNode === null && this.rightNode === null) {
            return `<node><value>${this.value}</value></node>`;
        }

        if (this.leftNode !== null && this.rightNode === null) {
            return `<node><children>${this.leftNode.toXml()}<node></node></children><value>${this.value}</value></node>`;
        }

        if (this.leftNode === null && this.rightNode !== null) {
            return `<node><children><node></node>${this.rightNode.toXml()}</children><value>${this.value}</value></node>`;
        }

        if (this.leftNode !== null && this.rightNode !== null) {
            return `<node><children>${this.leftNode.toXml()}${this.rightNode.toXml()}</children><value>${this.value}</value></node>`;
        }
    }

}

/**
 * @module node
 */
module.exports = Node;