function filterElements<T>(arr: T[], fnRef: (a: T) => boolean): T[] {
    const resultant: T[] = []
    for (const element of arr) {
        if (fnRef(element))
            resultant.push(element)
    }
    return resultant
}
filterElements<number>(
    [1, 2, 3, 4],
    (a) => a % 2 == 0
)
    .forEach((element) => console.log(element))
filterElements<string>(
    ['anil', 'sunil', 'aneesh'],
    (name) => name[0] == 'a'
)
    .forEach(element => console.log(element))

//type fnType = (a: number, b: number) => number
type fnType<T> = (a: T, b: T, c?: T) => T

const subtract: fnType<number> = (a, b, c = 0) => {
    return (a + b + c)
}
console.log(subtract(12, 13, 14))
console.log(subtract(12, 13))