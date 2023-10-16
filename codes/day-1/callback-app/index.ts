type myType = number | string
//function expression syntax
const add = function (a: number, b: number): myType {
    return a + b
}
const multiply = function (a: number, b: number, c: number): myType {
    return a * b * c
}

//function declaration syntax
//function invoke(fnRef: (x: number, y: number) => myType) {
type fnType = (x: number, y: number) => myType
function invoke(fnRef: fnType) {
    const result = fnRef(10, 20)
    console.log(result)
}
invoke(add)
//invoke(multiply)
type funcType = (x: number) => boolean
const isEven: funcType = function (num: number) {
    return num % 2 == 0
}


function filterElements(arr: number[], fnRef: (a: number) => boolean) {
    const result: number[] = []
    for (const value of arr) {
        //if (value % 2 == 0)
        const isTrue = fnRef(value)
        if (isTrue)
            result.push(value)
    }
    return result
}
const numbers: number[] = [5, 1, 2, 6, 3, 8, 4, 0, 7, 9]
// const output = filterElements(
//     numbers,
//     function (x: number) {
//         return x > 4
//     }
// )
/*
numbers
    .sort(
        function (a: number, b: number) {
            return a - b
        }
    )
const output = numbers
    .filter(
        function (a: number) {
            return a % 2 == 0
        }
    )
for (const item of output) {
    console.log(item)
}
*/
const compare = (a: number, b: number) => {
    return a - b
}
const isNumberEven = (a: number) => a % 2 == 0
const mapToStringArray = (a: number) => `Value: ${(a * 5).toString()}`
numbers
    .sort(
        compare
    )
    .filter(
        isNumberEven
    )
    .map(
        mapToStringArray
    )
    .forEach(
        (a: string) => console.log(a)
    )