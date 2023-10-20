import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { TokenService } from "./token.service";
import { Injectable } from "@angular/core";

@Injectable()
export class RequestInterceptorService implements HttpInterceptor {

    constructor(private tokenSvc: TokenService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.tokenSvc.getToken()
        if (token && token != null) {

            const clonedReq = req.clone({
                headers: req.headers.append(
                    'authorization',
                    `bearer ${token}`)
            })
            return next.handle(clonedReq)
        } else
            return next.handle(req)
    }
}