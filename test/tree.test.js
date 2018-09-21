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
        const arrNumbers = [
            3,
            1,
            7
        ]
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
        const arrStrings = [
            'foo',
            'bar'
        ]

        expect(() => {
            const bst = new BST(arrStrings)
        }).toThrowError()
    })

})

describe('Binary search tree (BST) data structure manipulation testing', () => {

    test('Add a single number to a BST', () => {
        const bst = new BST()

        bst.addNumber(2)
        expect(bst.value).toBe(2)
    })

    test('Add several numbers to a BST individually', () => {
        const bst = new BST()

        bst.addNumber(3)
        bst.addNumber(6)
        bst.addNumber(9)
        bst.addNumber(2)
        bst.addNumber(12)
        expect(bst.value).toBe(3)
        expect(bst.rightNode.value).toBe(6)
        expect(bst.rightNode.rightNode.value).toBe(9)
        expect(bst.leftNode.value).toBe(2)
        expect(bst.rightNode.rightNode.rightNode.value).toBe(12)
    })

    test('Add multiple numbers to a BST using an Array', () => {
        const bst = new BST()
        const arrNumbers = [
            3,
            6,
            9,
            2,
            12
        ]

        bst.addMultiple(arrNumbers)
        expect(bst.value).toBe(3)
        expect(bst.rightNode.value).toBe(6)
        expect(bst.rightNode.rightNode.value).toBe(9)
        expect(bst.leftNode.value).toBe(2)
        expect(bst.rightNode.rightNode.rightNode.value).toBe(12)
    })

    test('Remove the root number from a BST without child nodes', () => {
        const bst = new BST(5)

        bst.removeNumber(5)
        expect(bst.value).toBe(null)
    })

    test('Remove the root number from a BST with one child node', () => {
        const bst = new BST([
            4,
            2
        ])

        bst.removeNumber(4)
        expect(bst.value).toBe(2)
        expect(bst.leftNode).toBe(null)
    })

    test('Remove the root number from a BST with both child nodes', () => {
        const bst = new BST([
            4,
            2,
            6
        ])

        bst.removeNumber(4)
        expect(bst.value).toBe(6)
        expect(bst.leftNode.value).toBe(2)
        expect(bst.rightNode).toBe(null)
    })

    test('Remove the root number from a BST with a masive structure', () => {
        const bst = new BST([
            5,
            3,
            7,
            4,
            2,
            9,
            12,
            1
        ])

        bst.removeNumber(5)
        expect(bst.value).toBe(7)
        expect(bst.leftNode.value).toBe(3)
        expect(bst.leftNode.leftNode.value).toBe(2)
        expect(bst.leftNode.leftNode.leftNode.value).toBe(1)
        expect(bst.leftNode.rightNode.value).toBe(4)
        expect(bst.rightNode.value).toBe(9)
        expect(bst.rightNode.rightNode.value).toBe(12)
    })

    test('Remove all the numbers from a BST data structure', () => {
        const arrNumbers = [
            6,
            8,
            9,
            2,
            5,
            3,
            7,
            4,
            1
        ]
        const bst = new BST(arrNumbers)

        bst.removeMultiple(arrNumbers)
        expect(bst.value).toBe(null)
        expect(bst.leftNode).toBe(null)
        expect(bst.rightNode).toBe(null)
    })

})