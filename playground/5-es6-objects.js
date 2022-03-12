// Object property shorthand

const name = 'Jeongwon'
const userAge = 23

const user = {
    name, //shorthand syntax
    age: userAge,
    location: 'Atlanta'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red apple',
    price: 3,
    stock: 230,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// const {label: productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock)
}

transaction('order')