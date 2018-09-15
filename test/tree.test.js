const BST = require('../')

describe('Binary search tree (BST) data structure instance testing', () => {

    test('Initialize an empty binary search tree', () => {
        const bst = new BST()
        expect(bst.value).toBe(null)
        expect(bst.leftNode).toBe(null)
        expect(bst.rightNode).toBe(null)
    })

    test('Initialize a binary search tree with a single number', () => {
        const rndNumber = Math.round(Math.random() * 100)
        const bst = new BST(rndNumber)
        expect(bst.value).toBe(rndNumber)
        expect(bst.leftNode).toBe(null)
        expect(bst.rightNode).toBe(null)
    })

    test('Initialize a binary search tree with an array of numbers', () => {
        const arrNumbers = [3, 1, 7]
        const bst = new BST(arrNumbers)
        expect(bst.value).toBe(3)
        expect(bst.leftNode.value).toBe(1)
        expect(bst.rightNode.value).toBe(7)
    })

    test('Initialize a binary search tree with a string', () => {
        const string = 'foo'
        expect(() => {
            const bst = new BST(string)
        }).toThrowError()
    })

    test('Initialize a binary search tree with an array of strings', () => {
        const arrStrings = ['foo', 'bar']
        expect(() => {
            const bst = new BST(arrStrings)
        }).toThrowError()
    })

})