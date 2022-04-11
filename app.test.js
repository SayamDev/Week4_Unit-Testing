/*
const { test, expect } = require('@jest/globals')
const { describe } = require('yargs')

describe("testing my add function", () => {
    test("should equal 5 when pass 2 and 3", () => {
        expect(funcs.add(2, 3)).toBe(5)
    })
})


test("should not equal 6 when pass 2 and 3", () => {
    expect(funcs.add(2, 3)).not.toBe(6)
})



test("should contain Stuart", () => {
    expect(funcs.myArray).toContain("Stuart")
})

*/



const { TestWatcher } = require('jest')
let funcs = require('./app')


//challenge 1
describe("Num1 Challenge", () => {
    test("returned is not null", () => {
        expect(funcs.notReturned("sayam")).not.toBeNull()
    })
})
