//function main(){
function test() {
    let value = 100
    console.log(value) //? 100
    for (let index = 0; index < 1; index++) {
        let value = 200
        console.log(value)//? 200
    }
    console.log(value)//? 200/100

    function testAgain() {
        var value = 200
        console.log(value)
    }
    testAgain()
}
test()

const someData = 100
//someData = 200
const someObject = {
    prop1: "value1",
    prop2: 100
}
someData["extra-prop"] = "extra-prop-value"
//someData = {}

//}
//main()