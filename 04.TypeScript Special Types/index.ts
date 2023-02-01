// TypeScript has special types that may not refer to any specific type of data.


/*
Type: any
Type: unknown
Type: never
Type: undefined & null
*/

// 1.any is a type that disables type checking and effectively allows all types to be used.

let variable : any = "Kishore"
variable = 12
variable = true

// 2.Type: unknown

let Variable : unknown = "Kishore"
Variable = 12
Variable = false

// 3.Type: never
let val : never = true
// never effectively throws an error whenever it is defined.

// 4. Type: undefined & null
let y: undefined = undefined;
let z: null = null;
