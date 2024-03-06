"use strict";
function isParamObjWithSpecificKey(param) {
    if (typeof param === 'object' && param !== null) {
        if ('name' in param) {
            alert(`Parameter name "${param.name}".`);
        }
        else {
            alert(`No key "name" in object.`);
        }
    }
    else {
        alert(`"${param}" is not object.`);
    }
}
const user = {
    name: 'John',
    age: 27
};
const car = {
    brand: 'Ford',
    model: 'Mustang'
};
const price = 1000;
isParamObjWithSpecificKey(user);
isParamObjWithSpecificKey(car);
isParamObjWithSpecificKey(price);
//! 2
function isParamArrOfNum(param) {
    if (Array.isArray(param)) {
        if (param.length === 0) {
            alert(`Array is empty.`);
        }
        else if (param.every(e => typeof e === 'number') === true) {
            alert(`Sum of array numbers "${param.reduce((prev, curr) => prev + curr, 0)}".`);
        }
        else {
            alert(`Array is not array of numbers.`);
        }
    }
    else {
        alert(`"${param}" is not array. \nType of parameter is "${typeof param}".`);
    }
}
const garage = ['Ford', 'BMW', 'Audi'];
const carPrices = [20000, 30000, 40000];
const run = 2000;
const emptyArr = [];
isParamArrOfNum(garage);
isParamArrOfNum(carPrices);
isParamArrOfNum(run);
isParamArrOfNum(emptyArr);
