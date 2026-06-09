const { add, calculateHyp, clearLowPriority } = require('./code')

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