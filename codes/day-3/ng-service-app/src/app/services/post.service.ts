import { Injectable } from "@angular/core";
import { Post } from "../models/post";
import { ServiceContract } from "../models/service-contract";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "../config/constants";

@Injectable()
export class PostService implements ServiceContract<Post> {
    //private posts: Post[];

    constructor(private http: HttpClient) {
        // this.posts = [
        //     {
        //         "userId": 1,
        //         "id": 1,
        //         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        //         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        //     },
        //     {
        //         "userId": 1,
        //         "id": 2,
        //         "title": "qui est esse",
        //         "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        //     },
        //     {
        //         "userId": 1,
        //         "id": 3,
        //         "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        //         "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        //     }
        // ]
    }
    getAll(): Post[] {
        //return [...this.posts]
        this.http.get(API_URL)
        return []
    }
    getById(id: number): Post {
        throw new Error("Method not implemented.");
    }
    add(obj: Post): boolean {
        throw new Error("Method not implemented.");
    }

}