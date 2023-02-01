
// TypeScript has a specific syntax for typing arrays.
let names : string[] = ["Kishore"]

names.push("Kumar")


// The readonly keyword can prevent arrays from being changed.
let numbers : readonly number[] = [1,3,4]

numbers.push(1) //err


let arr : unknown[] = []

arr.push(1)
arr.push(true)

let newArr : (string | number)[] = []

newArr.push(12)
newArr.push("String")
newArr.push(true) //err