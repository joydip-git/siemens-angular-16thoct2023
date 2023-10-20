import { Injectable } from '@angular/core';
import { AuthServiceContract } from '../models/auth-service-contract';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { AUTH_API_BASE_URL } from 'src/app/config/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthServiceContract {

  constructor(private http: HttpClient) { }

  authenticate(user: User): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`${AUTH_API_BASE_URL}/authenticate`, user)
  }
  register(user: User): Observable<ApiResponse<User>> {
    return this.http.post<ApiResponse<User>>(`${AUTH_API_BASE_URL}/register`, user)
  }
}
