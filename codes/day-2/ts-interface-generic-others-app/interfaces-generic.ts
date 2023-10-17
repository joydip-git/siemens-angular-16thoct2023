interface IOperations<TArgument> {
    add(a: TArgument, b: TArgument): TArgument;
}
class Operations implements IOperations<number>{
    add(a: number, b: number): number {
        return a + b
    }
}

const op: Operations = new Operations()
console.log(op.add(12, 23))

interface IPerson {
    name: string;
    id: number;
    salary?: number;
}

class Person implements IPerson {
    name: string;
    id: number;
    salary?: number | undefined;
    constructor(name: string, id: number, salary: number) {
        this.name = name
        this.id = id
        this.salary = salary
    }
}

const personInfo: IPerson = {
    id: 1,
    name: 'anil',
    salary: 1000
}

const people: IPerson[] = [
    { id: 1, name: 'anil', salary: 1000 },
    { id: 2, name: 'sunil', salary: 2000 }
]