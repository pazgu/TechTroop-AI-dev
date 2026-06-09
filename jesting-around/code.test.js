const { add, calculateHyp, clearLowPriority, convertArraysToObject } = require('./code')

test("add should return sum of a + b", () => {
    let sum = add(1, 2)
    expect(sum).toBe(3)
})

const clearLowPriority = require('./code')

test("should keep only HIGH priority tasks", () => {
    let tasks = [{ text: "dummy", priority: "HIGH" }, { text: "dummy", priority: "LOW" }]
    let filteredTasks = clearLowPriority(tasks)

    filteredTasks.forEach(t => {
        expect(t.priority).toBe("HIGH")
    })
})

test("calculateHyp should return the hypotenuse of a right triangle", () => {
    let hypotenuse = calculateHyp(3, 4)
    expect(hypotenuse).toBe(5)
})

test("should convert two arrays of equal length to a single object with key-values from the arrays", () => {
    const x = ["food", "item", "location"]
    const y = ["cherry", "lightbulb", "Tazmania"]

    let result = convertArraysToObject(x, y);

    expect(result).toEqual({
        food: "cherry",
        item: "lightbulb",
        location: "Tazmania"
    })
})

test("should return a message when array lengths don't match", () => {
    const x = ["food", "item"]
    const y = ["cherry", "lightbulb", "Tazmania"]   

    let result = convertArraysToObject(x, y);

    expect(result).toEqual("Arrays must be of equal length");
});     
