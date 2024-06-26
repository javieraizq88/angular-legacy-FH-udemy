export class Person {
    // public name: string;
    // private address: string;

    constructor(
        public name: string,
        private address: string = 'No address'
    ) { }
}


export class Hero extends Person {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,

    ) {
        // fx q trae el constructor del padre ---> Person
        // agrega la fx realname para que no salga el error
        super( realName, 'New york' )
    }
}

const ironman = new Hero('ironman', 45, 'Tony');

console.log(ironman)