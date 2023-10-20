import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductServiceContract } from '../models/product-service-contract';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response';
import { Product } from '../models/product';
import { PRODUCT_API_BASE_URL } from 'src/app/config/constants';

@Injectable()
export class ProductService implements ProductServiceContract {

  constructor(private http: HttpClient) {

  }
  insertProduct(p: Product): Observable<ApiResponse<Product[]>> {
    return this.http.post<ApiResponse<Product[]>>(PRODUCT_API_BASE_URL, p)
  }
  modifyProduct(id: number, p: Product): Observable<ApiResponse<Product[]>> {
    return this.http.put<ApiResponse<Product[]>>(`${PRODUCT_API_BASE_URL}/${id}`, p)
  }
  removeProduct(id: number): Observable<ApiResponse<Product[]>> {
    return this.http.delete<ApiResponse<Product[]>>(`${PRODUCT_API_BASE_URL}/${id}`)
  }
  getProducts(): Observable<ApiResponse<Product[]>> {
    return this.http.get<ApiResponse<Product[]>>(PRODUCT_API_BASE_URL)
  }
  getProduct(id: number): Observable<ApiResponse<Product>> {
    return this.http.get<ApiResponse<Product>>(`${PRODUCT_API_BASE_URL}/${id}`)
  }
}
