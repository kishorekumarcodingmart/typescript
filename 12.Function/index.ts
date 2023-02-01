// Return type

const getDate = () : number => {
    return new Date().getTime()
}

// function doesn't return any value.
const sayHello = () : void => {
    console.log("Hello")
}

// Parameters

function multiply(a: number, b: number) {
    return a * b;
  }

// Optional Parameters

function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
  }

// Default Parameters
function pow(value: number, exponent: number = 10) {
    return value ** exponent;
  }

//   Named Parameters
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
  }

// Rest Parameters

function addNum(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
  }