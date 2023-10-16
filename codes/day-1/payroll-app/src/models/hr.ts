import { Employee } from "./employee";

export class Hr extends Employee {

    constructor(id: number, name: string, basicPayment: number, daPayment: number, hraPayment: number, public gratuityPayment: number) {

        super(id, name, basicPayment, daPayment, hraPayment)

    }

    calculateSalary(): number {
        return super.calculateSalary() + this.gratuityPayment
    }
}