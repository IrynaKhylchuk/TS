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
function updateSettings(obj, theme, fontSize, isDarkMode) {
    if (typeof theme !== 'undefined') {
        obj.theme = theme;
    }
    if (typeof fontSize !== 'undefined') {
        obj.fontSize = fontSize;
    }
    if (typeof isDarkMode !== 'undefined') {
        obj.isDarkMode = isDarkMode;
    }
}
const test = {
    theme: 'dark',
    fontSize: 32,
    isDarkMode: true
};
updateSettings(test, undefined, 35, false);
console.log(test);
function getUserProfile(user, account) {
    let userprofile = {
        name: user.name,
        age: user.age,
        username: account.username,
        email: account.email
    };
    return userprofile;
}
let user = {
    name: 'John',
    age: 27
};
let account = {
    username: 'johnDoe',
    email: 'johnDoe@mail.com'
};
console.log(getUserProfile(user, account));
