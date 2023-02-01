/* 
There are times when working with types where it's necessary to override the type of 
a variable, such as when incorrect types are provided by a library.
*/

let x: unknown = 'hello';
console.log((x as string).length);


let y: unknown = 'hello';
console.log((y as string).length); //undefined

let z: unknown = 'hello';
console.log((<string>z).length);