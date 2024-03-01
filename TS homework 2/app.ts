//! 1
type UserTuple = [string, number]
let user: UserTuple = ['John Doe', 27]

console.log(`Name: ${user[0]},\nAge: ${user[1]} y.o.`)


//! 2
interface Object {
    [key: string]: any
}

function getObjsByProp(arr: Object[], prop: string, val: any): Object[] {
    return arr.filter(obj => obj[prop] === val)
}

const arrTask2 = [
    { fruit: 'apple', color: 'red' },
    { fruit: 'apple', color: 'green' },
    { fruit: 'orange', color: 'orange' },
    { fruit: 'kiwi', color: 'green' }
]

console.log(`Array with found objects:`, getObjsByProp(arrTask2, 'fruit', 'apple'))


//! 3
function getObjByProp(arr: Object[], prop: string, val: any): Object | undefined {
    return arr.find(obj => obj[prop] === val ? obj : undefined)
}

const arrTask3 = [
    { fruit: 'apple', color: 'red' },
    { fruit: 'orange', color: 'orange' },
    { fruit: 'kiwi', color: 'green' }
]

console.log(`Found object:`, getObjByProp(arrTask3, 'fruit', 'apple'))


//! 4
function getArithmeticMean(arr: number[]): number {
    let sum: number = 0
    arr.forEach(num => sum += num)
    let arithmeticMean = sum / arr.length

    return arithmeticMean
}

console.log(`Arithmetic mean:`, getArithmeticMean([1, 2, 3, 4]))