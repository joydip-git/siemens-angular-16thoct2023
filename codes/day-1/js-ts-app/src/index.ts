var x: number = 10
console.log(x, typeof x)

var y = 'siemens'
console.log(y, typeof y)

var z = false
console.log(z, typeof z)

//1. object literal syntax
var trainerObj = {
    //value property
    trainerName: 'joydip',
    id: 1,
    subject: 'Angular',

    //functional property
    show: function () {
        return `
            Name:${this.trainerName},
            Id:${this.id}, 
            Subject:${this.subject}
        `
    }
}

//dot operator
console.log(trainerObj.trainerName)
//indexer
console.log(trainerObj['subject'])
console.log(trainerObj.show())
console.log(trainerObj['show']())

//JS obejcts are dynamically expandable
//trainerObj.location = 'Bangalore'
trainerObj['location'] = 'Bangalore'
trainerObj['salary'] = 2000

console.log(trainerObj, typeof trainerObj)

for (var propName in trainerObj) {
    console.log(`${propName}:${trainerObj[propName]}`)
}

//functions in JS
function add(a: number, b: number): number {
    return a + b
}

var data = 12
//data = 'joydip'



