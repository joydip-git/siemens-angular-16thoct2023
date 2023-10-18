import { Injectable } from "@angular/core";
import { Post } from "../models/post";
import { ServiceContract } from "../models/service-contract";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "../config/constants";
import { Observable } from "rxjs";

@Injectable()
export class PostService implements ServiceContract<Post> {

    constructor(private http: HttpClient) {

    }
    update(postId: number, obj: Post): Observable<Post> {
        return this.http.put<Post>(`${API_URL}/${postId}`, obj)
    }
    remove(postId: number): Observable<Post> {
        return this.http.delete<Post>(`${API_URL}/${postId}`)
    }
    getAll(): Observable<Post[]> {
        return this.http.get<Post[]>(API_URL)
    }
    getById(id: number): Observable<Post> {
        return this.http.get<Post>(`${API_URL}/${id}`)
    }
    add(obj: Post): Observable<Post> {
        return this.http.post<Post>(API_URL, obj)
    }
}