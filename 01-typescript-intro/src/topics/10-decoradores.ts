
function classDecorator (
    constructor: any
) {
    return class extends constructor{
        newProperty = 'NewProperty';
        hello = 'override'
    }
}


// el decorador agrega comportamiento a la classe
@classDecorator
export class SuperClass {
    public myProperty: string = 'Abc123';

    print() {
        console.log('hola mundo')
    }
}

console.log( SuperClass );

const myClass = new SuperClass();
console.log( myClass );