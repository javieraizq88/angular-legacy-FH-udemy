interface Product {
    description: string;
    price: number
}

const phone: Product = {
    description: 'Iphone 15',
    price: 150
}

const tablet: Product = {
    description: 'Ipad air',
    price: 250
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// function taxCalculation(options: TaxCalculationOptions): number[] {
// function taxCalculation({ tax, products }: TaxCalculationOptions): [number, number] {
function taxCalculation( options : TaxCalculationOptions): [number, number] {
    
    const { tax, products } = options;
    
    let total = 0;

    // options.products.forEach( product => {
    //     total += product.price
    // });
    // #### lo mismo q arriba pero destructurado ####
    products.forEach(({ price }) => {
        total += price
    });

    // return [total, options.total * tax]
    // #### lo mismo q arriba pero destructurado ####
    return [total, total * tax]
}


const shoppingCart = [phone, tablet];
const tax = 0.15;

// const result = taxCalculation({
//     products: shoppingCart,
//     tax: tax,
// })
// #### lo mismo q arriba pero destructurado ####
const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax,
})

console.log('Total', total);
console.log('Tax', taxTotal);



// #### solucion de destructuracion ####



export { };