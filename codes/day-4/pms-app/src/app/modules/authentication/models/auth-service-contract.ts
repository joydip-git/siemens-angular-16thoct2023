import { Observable } from "rxjs";
import { User } from "./user";
import { ApiResponse } from "src/app/models/api-response";

export interface AuthServiceContract {
    authenticate(user: User): Observable<ApiResponse<string>>;
    register(user: User): Observable<ApiResponse<User>>;
}