function getLargestElement<T extends string | number>(arr: Array<T>): T | undefined {
    if (arr.length === 0) {
        return undefined
    }

    let largest: T = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && typeof largest === 'number') {
            largest = Math.max(largest, arr[i] as number) as T
        } else if (typeof arr[i] === 'string' && typeof largest === 'string') {
            largest = (arr[i] as string).length > largest.length ? arr[i] : largest
        }
    }

    return largest
}

const numArr: number[] = [1, 2, 3, 4, 5]
const strArr: string[] = ['one', 'two', 'three', 'four', 'five']

console.log('Largest number in array ->', getLargestElement<number>(numArr))
console.log('Longest word in array ->', getLargestElement<string>(strArr))
