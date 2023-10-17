import { add } from "./utility"; //{add:add}
console.log(add(12, 13))
//const { addFn:addFunction } = require('./utility') //{ addFn: add }
//addFn(12,13)
//spread operator
// interface Person {
//     name?: string;
//     id?: number;
//     salary?: number;
// }
const obj = {
    nameValue: 'anil',
    id: 1,
    salary: 1000,
    friends: [{ name: 'sunil' }, { name: 'joydip' }]
}

// const name = obj.name
// const id = obj.id
// const salary = obj.salary
//const { name: name, id: id, salary: salary } = obj
const { nameValue, id, salary } = obj
console.log(nameValue, id, salary)

const numArray = [1, 2, 3, 4, 5, 6]
// const first = numArray[0]
// const fourth = numArray[3]
// const sixth = numArray[5]
const [first, , , fourth, , sixth] = numArray
console.log(first, fourth, sixth)

// interface PersonType {
//     [propName: string]: any;
// }

//const copy: PersonType = {}
//const copy = {}

// for (const propName in obj) {
//     const propValue = obj[propName]
//     copy[propName] = propValue
// }
const copy = {
    ...obj
}
const anotherCopy = {
    name: obj.nameValue,
    id: obj.id,
    salary: obj.salary,
    //friends: obj.friends
    //friends: [...obj.friends],
    friends: [{ ...obj.friends[0] }, { ...obj.friends[1] }]
}

console.log(obj)
console.log(copy)

const numbers = [1, 2, 3, 4]
const copyNumbers = [...numbers]

//rest operator
//it is used with an array where the array is part of the argument list of a function
//rest operator is not used with array anywhere else
//declare the rest array as the ;ast argument in the array 
function calculateAverage(name: string, ...marks: number[]) {
    let sum = 0
    let avg = 0
    if (marks && marks.length > 0) {
        for (const item of marks) {
            sum += item
        }
        avg = sum / marks.length
    }
    return avg
}
calculateAverage('sunil', 10, 20, 30)
calculateAverage('anil', 10, 20)
calculateAverage('joydip', 10)
calculateAverage('mahesh')
