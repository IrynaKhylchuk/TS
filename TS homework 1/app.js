"use strict";
// 1 
class Address {
    constructor(city, street, postalCode) {
        this.city = city;
        this.street = street;
        this.postalCode = postalCode;
    }
    getAddress() {
        return `City: ${this.city}, \nStreet: ${this.street}, \nPostal Code: ${this.postalCode}`;
    }
}
class Customer {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getCustomerInfo() {
        return `Name: ${this.name}, \nAge ${this.age}, \n${this.address.getAddress()}`;
    }
}
const customerAddress = new Address('Rivne', 'Soborna', 33000);
const customerInfo = new Customer('John Doe', 37, customerAddress);
console.log(customerInfo.getCustomerInfo());
class Rectangle {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    calculateArea() {
        return this.width * this.length;
    }
}
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
const rectangle = new Rectangle(2, 4);
const circle = new Circle(2);
const rectangleArea = rectangle.calculateArea();
const circleArea = circle.calculateArea();
console.log('Area of the rectangle:', rectangleArea);
console.log('Area of the circle:', circleArea);
// 3
class Store {
    constructor(name) {
        this.name = name;
        this.cart = [];
    }
    addProductToCart(productName) {
        this.cart.push(productName.toLowerCase());
    }
    removeProductFromCart(productName) {
        this.cart = this.cart.filter(p => p !== productName.toLowerCase());
    }
    showCart() {
        console.log(`${this.name}:`, this.cart);
    }
}
const cart = new Store('Cart');
cart.addProductToCart('T-shirt');
cart.addProductToCart('Pants');
cart.addProductToCart('Sneakers');
cart.removeProductFromCart('sneakers');
cart.showCart();
