//! 1
interface ObjWithNameKey {
    name: string
    age: number
}
interface ObjWithoutNameKey {
    brand: string
    model: string
}

function isParamObjWithSpecificKey(param: unknown): void {
    if (typeof param === 'object' && param !== null) {
        if ('name' in param) {
            alert(`Parameter name "${param.name}".`)
        } else {
            alert(`No key "name" in object.`)
        }
    } else {
        alert(`"${param}" is not object.`)
    }
}

const user: ObjWithNameKey = {
    name: 'John',
    age: 27
}
const car: ObjWithoutNameKey = {
    brand: 'Ford',
    model: 'Mustang'
}
const price: number = 1000

isParamObjWithSpecificKey(user)
isParamObjWithSpecificKey(car)
isParamObjWithSpecificKey(price)


//! 2
function isParamArrOfNum(param: unknown): void {
    if (Array.isArray(param)) {
        if (param.length === 0) {
            alert(`Array is empty.`)
        } else if (param.every(e => typeof e === 'number') === true) {
            alert(`Sum of array numbers "${param.reduce((prev, curr) => prev + curr, 0)}".`)
        } else {
            alert(`Array is not array of numbers.`)
        }
    } else {
        alert(`"${param}" is not array. \nType of parameter is "${typeof param}".`)
    }
}

const garage: string[] = ['Ford', 'BMW', 'Audi']
const carPrices: number[] = [20000, 30000, 40000]
const run: number = 2000
const emptyArr: any[] = []

isParamArrOfNum(garage)
isParamArrOfNum(carPrices)
isParamArrOfNum(run)
isParamArrOfNum(emptyArr)