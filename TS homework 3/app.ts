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
        
    }
}