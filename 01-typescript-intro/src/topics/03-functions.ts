function addNumbers(a: number, b: number):number {
    return a + b;
}

const addNumbersArrow = ( a: number, b: number ) => {
    return `${ a + b }`;
}

function multiplicar( numeroUno: number, numeroDos?: number, base: number = 2) {
    return numeroUno * base;
}


const result: number = addNumbers(1, 2);
const result2: string = addNumbersArrow(1,2);
const multiplicarResultado: number = multiplicar(5);

console.log({ result, result2, multiplicarResultado })

export {}