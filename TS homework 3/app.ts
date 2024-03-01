//! 1
interface Shape {
    name: string
    calculateArea(): number
}

class Circle implements Shape {
    name: string
    radius: number

    constructor(radius: number) {
        this.name = 'Circle'
        this.radius = radius
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
        this.width = width
        this.length = length
    }

    calculateArea(): number {
        return this.width * this.length
    }
}

const circle = new Circle(2)
const rectangle = new Rectangle(2, 2)

console.log(`Circle area -`, circle.calculateArea())
console.log(`Rectangle area -`, rectangle.calculateArea())


//! 2
interface Settings {
    theme?: string
    fontSize?: number
    isDarkMode?: boolean
}

function updateSettings(obj: Settings, theme?: string, fontSize?: number, isDarkMode?: boolean): void {
    if (typeof theme !== 'undefined') {
        obj.theme = theme
    }
    if (typeof fontSize !== 'undefined') {
        obj.fontSize = fontSize
    }
    if (typeof isDarkMode !== 'undefined') {
        obj.isDarkMode = isDarkMode
    }
}

const test: Settings = {
    theme: 'dark',
    fontSize: 32,
    isDarkMode: true
}

updateSettings(test, undefined, 35, false)
console.log(test)


//! 3
interface User {
    name: string
    age: number
}

interface Account {
    username: string
    email: string
}

interface UserProfile extends User, Account { }

function getUserProfile(user: User, account: Account): UserProfile {
    let userprofile: UserProfile = {
        name: user.name,
        age: user.age,
        username: account.username,
        email: account.email
    }

    return userprofile
}

let user: User = {
    name: 'John',
    age: 27
}

let account: Account = {
    username: 'johnDoe',
    email: 'johnDoe@mail.com'
}

console.log(getUserProfile(user, account))