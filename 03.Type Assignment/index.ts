// Type Assignment
// When creating a variable, there are two main ways TypeScript assigns a type:

/*
    Explicit
    Implicit
*/

// Explicit - writing out the type:
// Explicit type assignment are easier to read and more intentional.
const fname : string = "Kishore"

string = 33
// attempts to re-assign the value to a different type

// Implicit - TypeScript will "guess" the type, based on the assigned value:
const lname = "Kumar"
// Note: Having TypeScript "guess" the type of a value is called infer.

