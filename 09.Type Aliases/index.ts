// TypeScript allows types to be defined separately from the variables that use them.

type fname = string

const fName : fname = "Kishore"

type userDetails = {
    name : string,
    age : number,
    isVerified : boolean
}

let obj : userDetails = {
    name : "Kishore",
    age : 21,
    isVerified : true
}