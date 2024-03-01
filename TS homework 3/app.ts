//! 1
interface Shape {
    name: string,
    calculateArea(): number
}

class Circle implements Shape {
    name: string
    radius: number

    constructor(radius: number) {
        this.name = 'Circle'
        this.radius= radius
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2)
    }
}

class Rectangle implements Shape {
    name: string
    width: number
    length: number

    constructor(width: number, length: number) {
        this.name = 'Circle'
        this.width= width
        this.length= length
    }

    calculateArea(): number {
        return this.width * this.length
    }
}

const circle = new Circle(2)
const rectangle = new Rectangle(2, 2)

console.log(`Circle area -`, circle.calculateArea())
console.log(`Rectangle area -`, rectangle.calculateArea())
