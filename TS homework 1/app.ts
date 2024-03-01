// 1 
class Address {
    city: string
    street: string
    postalCode: number

    constructor(city: string, street: string, postalCode: number) {
        this.city = city
        this.street = street
        this.postalCode = postalCode
    }

    getAddress(): string {
        return `City: ${this.city}, \nStreet: ${this.street}, \nPostal Code: ${this.postalCode}`
    }
}

class Customer {
    name: string
    age: number
    address: Address

    constructor(name: string, age: number, address: Address) {
        this.name = name
        this.age = age
        this.address = address
    }

    getCustomerInfo(): string {
        return `Name: ${this.name}, \nAge ${this.age}, \n${this.address.getAddress()}`
    }
}

const customerAddress = new Address('Rivne', 'Soborna', 33000)
const customerInfo = new Customer('John Doe', 37, customerAddress)

console.log(customerInfo.getCustomerInfo())


// 2
interface Shape {
    calculateArea(): number
}

class Rectangle implements Shape {
    width: number
    length: number

    constructor(width: number, length: number) {
        this.width = width
        this.length = length
    }

    calculateArea(): number {
        return this.width * this.length
    }
}

class Circle implements Shape {
    radius: number

    constructor(radius: number) {
        this.radius = radius
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2)
    }
}

const rectangle = new Rectangle(2, 4)
const circle = new Circle(2)

const rectangleArea = rectangle.calculateArea()
const circleArea = circle.calculateArea()

console.log('Area of the rectangle:', rectangleArea)
console.log('Area of the circle:', circleArea)


// 3
class Store {
    name: string
    cart: string[]

    constructor(name: string) {
        this.name = name
        this.cart = []
    }

    addProductToCart(productName: string): void {
        this.cart.push(productName.toLowerCase())
    }

    removeProductFromCart(productName: string): void {
        this.cart = this.cart.filter(p => p !== productName.toLowerCase())
    }

    showCart(): void {
        console.log(`${this.name}:`, this.cart)
    }

}

const cart = new Store('Cart')

cart.addProductToCart('T-shirt')
cart.addProductToCart('Pants')
cart.addProductToCart('Sneakers')

cart.removeProductFromCart('sneakers')

cart.showCart()
