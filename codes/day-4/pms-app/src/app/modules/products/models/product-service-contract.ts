import { Observable } from "rxjs";
import { Product } from "./product";
import { ApiResponse } from "src/app/models/api-response";

export interface ProductServiceContract {
    insertProduct(p: Product): Observable<ApiResponse<Product[]>>;
    modifyProduct(id: number, p: Product): Observable<ApiResponse<Product[]>>;
    removeProduct(id: number): Observable<ApiResponse<Product[]>>;
    getProducts(): Observable<ApiResponse<Product[]>>;
    getProduct(id: number): Observable<ApiResponse<Product>>;
}
