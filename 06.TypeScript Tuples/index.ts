// A tuple is a typed array with a pre-defined length and types for each index.

type User = [number, boolean, string]

let myTuple : User = [12,false,"Kishore"]

myTuple.push("Kumar")

console.log(myTuple)

const graph: [ number, number] = [55.2, 41.3];

const [x,y] = graph

console.log(x,y)