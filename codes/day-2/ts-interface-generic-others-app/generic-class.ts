class Collection<T>{

    private _elements: T[];

    constructor() {
        //this.elements = new Array<T>()
        this._elements = []
    }
    add(item: T) {
        this._elements.push(item)
    }
    get elements() {
        return this._elements
    }
}

const numbers: Collection<number> = new Collection<number>()
numbers.add(12)