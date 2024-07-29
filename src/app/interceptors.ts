import { isPlatformServer } from "@angular/common";
import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject, PLATFORM_ID } from "@angular/core";
import { Observable } from "rxjs";

export function loggerInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    const platformId = inject(PLATFORM_ID);
    if (isPlatformServer(platformId)) {
        console.log('req', req.url);
    }
    return next(req);
}