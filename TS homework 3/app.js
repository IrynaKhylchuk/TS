"use strict";
class Circle {
    constructor(radius) {
        this.name = 'Circle';
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
class Rectangle {
    constructor(width, length) {
        this.name = 'Circle';
        this.width = width;
        this.length = length;
    }
    calculateArea() {
        return this.width * this.length;
    }
}
const circle = new Circle(2);
const rectangle = new Rectangle(2, 2);
console.log(`Circle area -`, circle.calculateArea());
console.log(`Rectangle area -`, rectangle.calculateArea());
