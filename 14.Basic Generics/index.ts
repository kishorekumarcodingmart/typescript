function createArr<S, T>(v1: S, v2 : T) : [S, T] {
    return [v1, v2]
}


type name<T> = {
    fnmae : T,
    lname : T
}

let obj : name<string | number> = {
    fnmae : "Kishore",
    lname : 25
}
