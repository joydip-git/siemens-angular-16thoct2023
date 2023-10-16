import { Employee } from "./employee";

export class Developer extends Employee {

    constructor(id: number, name: string, basicPayment: number, daPayment: number, hraPayment: number, public incentivePayment: number) {

        super(id, name, basicPayment, daPayment, hraPayment)

    }

    calculateSalary(): number {
        return super.calculateSalary() + this.incentivePayment
    }
}