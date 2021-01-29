/* Write a function (in JS) to consume this API. 
Write another function for business logic to List all products rated 4 and above. 
List the products by name asc and rating desc.s.
*/

const listOfProducts = [
    {product: "Shoes", price: 35, rating: 4.2},
    {product: "Coat", price: 32, rating: 4.1},
    {product: "White Hat", price: 21, rating: 4.8},
    {product: "Red hat", price : 22, rating: 3.8},
    {product: "Blue Hat", price: 24, rating: 1.8}
    ]

async function getProducts(URL){
    try {
        const response = await fetch(URL)
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}

function displayProducts(products){
    const topRated = products.filter(product => product.rating >= 4)
    const ascNameList = [...topRated]
    
    const productList = {
        ascName: ascNameList.sort((a, b) => a.product.localeCompare(b.product)),
        descRating: topRated.sort((a, b) =>  b.rating - a.rating)
    }

    return productList
}

console.log(displayProducts(listOfProducts))