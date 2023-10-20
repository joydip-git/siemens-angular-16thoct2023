import { BehaviorSubject, from, of } from "rxjs";
import { Product } from "../models/product";

export class StorageService {
    private storage = new BehaviorSubject<Product | undefined>(undefined)
    private storageObservable = this.storage.asObservable()

    publish(data: Product) {
        this.storage.next(data)
        console.log('data published', this.storage.getValue())
        //localStorage.setItem('data', JSON.stringify(data))
    }
    get() {
        // const value = localStorage.getItem('data')
        // if (value != null) {
        //     const p = <Product>JSON.parse(value)
        //     return of(p)
        // } else
        //     return undefined
        return this.storageObservable

    }
}