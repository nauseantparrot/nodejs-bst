const Node = require('./node')

/**
 * @class
 * @name Tree
 * @description Represents the whole binary search tree data structure
 * @author Nickolas Garcia <gfelipenickolas@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 * @extends Node
 */
class Tree extends Node {

    /**
     * @constructor Tree
     * @param {*} args Single number or array of numbers to initialize structure with
     */
    constructor(args) {
        if (typeof args === 'undefined') {
            super()
            return
        }

        if (typeof args === 'number') {
            super(args)
            return
        }

        if (!Array.isArray(args)) {
            throw new Error('You must pass a number or array of numbers as argument of a Tree constructor')
        }

        super()
        
        for (const number of args) {
            this.addNumber(number)
        }
    }

}

/**
 * @module tree
 */
module.exports = Tree