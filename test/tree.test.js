const BST = require('../')

describe('Binary search tree (BST) data structure instance testing', () => {

    test('Initialize an empty binary search tree', () => {
        const bst = new BST()

        expect(bst.value).toBe(null)
        expect(bst.leftNode).toBe(null)
        expect(bst.rightNode).toBe(null)
    })

    test('Initialize a binary search tree with a single number', () => {
        const anyNumber = Math.round(Math.random() * 100),
            bst = new BST(anyNumber)

        expect(bst.value).toBe(anyNumber)
        expect(bst.leftNode).toBe(null)
        expect(bst.rightNode).toBe(null)
    })

    test('Initialize a binary search tree with an array of numbers', () => {
        const bst = new BST([
            3,
            1,
            7
        ])

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
        const bst = new BST(),
            numbers = [
                3,
                6,
                9,
                2,
                12
            ]

        bst.addMultiple(numbers)
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
        const bst = new BST([
            6,
            8,
            9,
            2,
            5,
            3,
            7,
            4,
            1
        ])

        expect(bst.value).toBe(6)
        expect(bst.leftNode.value).toBe(2)
        expect(bst.leftNode.leftNode.value).toBe(1)
        expect(bst.leftNode.rightNode.value).toBe(5)
        expect(bst.leftNode.rightNode.leftNode.value).toBe(3)
        expect(bst.leftNode.rightNode.leftNode.rightNode.value).toBe(4)
        expect(bst.rightNode.value).toBe(8)
        expect(bst.rightNode.leftNode.value).toBe(7)
        expect(bst.rightNode.rightNode.value).toBe(9)
        // Check parents
        expect(bst.parentNode).toBe(null)
        expect(bst.leftNode.parentNode.value).toBe(6)
        expect(bst.leftNode.leftNode.parentNode.value).toBe(2)
        expect(bst.leftNode.rightNode.parentNode.value).toBe(2)
        expect(bst.leftNode.rightNode.leftNode.parentNode.value).toBe(5)
        expect(bst.leftNode.rightNode.leftNode.rightNode.parentNode.value).toBe(3)
        expect(bst.rightNode.parentNode.value).toBe(6)
        expect(bst.rightNode.leftNode.parentNode.value).toBe(8)
        expect(bst.rightNode.rightNode.parentNode.value).toBe(8)
        // Remove 6
        bst.removeNumber(6)
        expect(bst.value).toBe(8)
        expect(bst.leftNode.value).toBe(2)
        expect(bst.leftNode.leftNode.value).toBe(1)
        expect(bst.leftNode.rightNode.value).toBe(5)
        expect(bst.leftNode.rightNode.leftNode.value).toBe(3)
        expect(bst.leftNode.rightNode.leftNode.rightNode.value).toBe(4)
        expect(bst.leftNode.rightNode.rightNode.value).toBe(7)
        expect(bst.rightNode.value).toBe(9)
        // Check parents
        expect(bst.parentNode).toBe(null)
        expect(bst.leftNode.parentNode.value).toBe(8)
        expect(bst.leftNode.leftNode.parentNode.value).toBe(2)
        expect(bst.leftNode.rightNode.parentNode.value).toBe(2)
        expect(bst.leftNode.rightNode.leftNode.parentNode.value).toBe(5)
        expect(bst.leftNode.rightNode.leftNode.rightNode.parentNode.value).toBe(3)
        expect(bst.leftNode.rightNode.rightNode.parentNode.value).toBe(5)
        expect(bst.rightNode.parentNode.value).toBe(8)
        // Remove 8
        bst.removeNumber(8)
        expect(bst.value).toBe(9)
        expect(bst.leftNode.value).toBe(2)
        expect(bst.leftNode.leftNode.value).toBe(1)
        expect(bst.leftNode.rightNode.value).toBe(5)
        expect(bst.leftNode.rightNode.leftNode.value).toBe(3)
        expect(bst.leftNode.rightNode.leftNode.rightNode.value).toBe(4)
        expect(bst.leftNode.rightNode.rightNode.value).toBe(7)
        // Check parents
        expect(bst.parentNode).toBe(null)
        expect(bst.leftNode.parentNode.value).toBe(9)
        expect(bst.leftNode.leftNode.parentNode.value).toBe(2)
        expect(bst.leftNode.rightNode.parentNode.value).toBe(2)
        expect(bst.leftNode.rightNode.leftNode.parentNode.value).toBe(5)
        expect(bst.leftNode.rightNode.leftNode.rightNode.parentNode.value).toBe(3)
        expect(bst.leftNode.rightNode.rightNode.parentNode.value).toBe(5)
        // Remove 9
        bst.removeNumber(9)
        expect(bst.value).toBe(2)
        expect(bst.leftNode.value).toBe(1)
        expect(bst.rightNode.value).toBe(5)
        expect(bst.rightNode.leftNode.value).toBe(3)
        expect(bst.rightNode.rightNode.value).toBe(7)
        expect(bst.rightNode.leftNode.rightNode.value).toBe(4)
        // Check parents
        expect(bst.parentNode).toBe(null)
        expect(bst.leftNode.parentNode.value).toBe(2)
        expect(bst.rightNode.parentNode.value).toBe(2)
        expect(bst.rightNode.leftNode.parentNode.value).toBe(5)
        expect(bst.rightNode.rightNode.parentNode.value).toBe(5)
        expect(bst.rightNode.leftNode.rightNode.parentNode.value).toBe(3)
        // Remove 2
        bst.removeNumber(2)
        expect(bst.value).toBe(5)
        expect(bst.rightNode.value).toBe(7)
        expect(bst.leftNode.value).toBe(1)
        expect(bst.leftNode.rightNode.value).toBe(3)
        expect(bst.leftNode.rightNode.rightNode.value).toBe(4)
        // Check parents
        expect(bst.parentNode).toBe(null)
        expect(bst.rightNode.parentNode.value).toBe(5)
        expect(bst.leftNode.parentNode.value).toBe(5)
        expect(bst.leftNode.rightNode.parentNode.value).toBe(1)
        expect(bst.leftNode.rightNode.rightNode.parentNode.value).toBe(3)
        // Remove 5
        bst.removeNumber(5)
        expect(bst.value).toBe(7)
        expect(bst.leftNode.value).toBe(1)
        expect(bst.leftNode.rightNode.value).toBe(3)
        expect(bst.leftNode.rightNode.rightNode.value).toBe(4)
        // Check parents
        expect(bst.parentNode).toBe(null)
        expect(bst.leftNode.parentNode.value).toBe(7)
        expect(bst.leftNode.rightNode.parentNode.value).toBe(1)
        expect(bst.leftNode.rightNode.rightNode.parentNode.value).toBe(3)
        // Remove 7
        bst.removeNumber(7)
        expect(bst.value).toBe(1)
        expect(bst.rightNode.value).toBe(3)
        expect(bst.rightNode.rightNode.value).toBe(4)
        // Check parents
        expect(bst.parentNode).toBe(null)
        expect(bst.rightNode.parentNode.value).toBe(1)
        expect(bst.rightNode.rightNode.parentNode.value).toBe(3)
        // Remove 1
        bst.removeNumber(1)
        expect(bst.value).toBe(3)
        expect(bst.rightNode.value).toBe(4)
        // Check parents
        expect(bst.parentNode).toBe(null)
        expect(bst.rightNode.parentNode.value).toBe(3)
        // Remove 3
        bst.removeNumber(3)
        expect(bst.value).toBe(4)
        expect(bst.leftNode).toBe(null)
        expect(bst.rightNode).toBe(null)
        // Check parent
        expect(bst.parentNode).toBe(null)
        // Remove 4
        bst.removeNumber(4)
        expect(bst.value).toBe(null)
        expect(bst.leftNode).toBe(null)
        expect(bst.rightNode).toBe(null)
    })

})

describe('Binary search tree (BST) full binary checking', () => {

    test('Check if a full binary search tree (BST) is checked as true', () => {
        const bst = new BST([
            5,
            2,
            1,
            3,
            8,
            6,
            9
        ])

        expect(bst.isFullBinary()).toBe(true)
    })

    test('Check if a no-full binary search tree (BST) is checked as false', () => {
        const bst = new BST([
            7,
            4,
            2,
            8
        ])

        expect(bst.isFullBinary()).toBe(false)
    })

})