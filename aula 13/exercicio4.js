// 4. Array of objects
// Make an array 'market' with 3 products.
// Each product has 'name' and 'price'.
// Print the name of each product along with its price.

let market = [
    { name: "Apple", price: 1.2 },
    { name: "Banana", price: 0.5 },
    { name: "Orange", price: 0.8 }
];

for (let i = 0; i < market.length; i++) {
    console.log("Product: " + market[i].name + ", Price: $" + market[i].price);
}