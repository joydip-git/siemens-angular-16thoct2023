import { Observable } from "rxjs";

export interface ServiceContract<T> {
    getAll(): Observable<T[]>;
    getById(id: number): Observable<T>;
    add(obj: T): Observable<T>;
    update(postId: number, obj: T): Observable<T>;
    remove(postId: number): Observable<T>;
}