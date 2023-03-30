export interface Product{
    name: string, 
    price: number
}

const products: Product[] = [
    {
        name: "Gas",
        price: 50,
    },
    {
        name: "Lunch",
        price: 20,
    },
    {
        name: "Shoes",
        price: 150,
    },
],

export function calcAverageProductPrice(arrayOfProducts: Product[]) {
    let average: number = arrayOfProducts[0];

   for (let product of arrayOfProducts) {
    average = average + product.price;
   }
   
   return average / arrayOfProducts.length;

}

let averagePrice = calcAverageProductPrice(average);
console.log(averagePrice);
