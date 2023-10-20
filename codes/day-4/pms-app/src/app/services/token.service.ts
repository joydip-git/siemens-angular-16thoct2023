import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TokenService {
    saveToken(token: string) {
        localStorage.setItem('token', token)
    }
    getToken() {
        return localStorage.getItem('token')
    }
    deleteToken() {
        localStorage.removeItem('token')
    }
    isLoggedIn() {
        return localStorage.getItem('token') ? true : false
    }
}