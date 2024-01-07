const PRODUCTS = [
    {
        id: 1,
        name: 'Poco Phone',
        price: 370,
        image: require("../assets/products/poco.jpeg"),
        description: "Veniam aliqua deserunt sint qui Lorem."
    
    },
    {
        id: 2,
        name: 'Electric Mixer',
        price: 40,
        image: require("../assets/products/electricMixer.jpg"),
        description: "Veniam aliqua deserunt sint qui Lorem."
    
    },
    {
        id: 3,
        name: 'Astronaut',
        price: 30,
        image: require("../assets/products/astronaut.jpg"),
        description: "Veniam aliqua deserunt sint qui Lorem."
    
    },
]

export function getProducts(){
    return PRODUCTS;
}

export function getProduct(id){
    return PRODUCTS.find( product =>  product.id == id);
}