export interface ServiceContract<T> {
    getAll(): T[];
    getById(id: number): T;
    add(obj: T): boolean;
}