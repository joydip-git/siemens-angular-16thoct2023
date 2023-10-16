import { Developer } from "./models/developer"
import { Employee } from "./models/employee"
import { Hr } from "./models/hr"

const employees: Employee[] = []

const anilDeveloper = new Developer(3, "anil", 1000, 2000, 3000, 4000)
const sunilDeveloper = new Developer(1, "sunil", 1500, 2500, 3500, 4500)

const vinodHr = new Hr(2, "vinod", 1000, 1100, 1200, 2200)
const pavanHr = new Hr(4, "pavan", 2000, 3000, 4000, 5000)

employees.push(anilDeveloper, sunilDeveloper, vinodHr, pavanHr)

// for (let index = 0; index < employees.length; index++) {
//     const emp = employees[index];
//     console.log(`${emp.name} got salary of ${emp.calculateSalary()}`)
// }
employees
    .sort(
        function (e1: Employee, e2: Employee) {
            return e1
                .name
                .toLocaleLowerCase()
                .localeCompare(e2.name.toLocaleLowerCase())
        }
    )
    .filter((e: Employee) => e.calculateSalary() > 10000)
    .forEach(
        (e: Employee) => console.log(`${e.name} got salary of ${e.calculateSalary()}`)
    )