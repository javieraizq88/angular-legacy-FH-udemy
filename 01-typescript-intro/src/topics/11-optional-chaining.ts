export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'javiera',
}

const passenger2: Passenger = {
    name: 'vale',
    children: ['clara', 'facu', 'maria'],
}


const printChildren = (passenger: Passenger) => {
    //dice cuantos hijos tiene, si no tiene el arreglo, muestra 0
    const hoyManyChildren = passenger.children?.length || 0;

    console.log( passenger.name, hoyManyChildren);
}

printChildren( passenger1 );