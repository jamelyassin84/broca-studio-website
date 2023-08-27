// import {empty} from '@broca-studio/pipes/is-empty.pipe'
// import {Injectable} from '@angular/core'
// import {
//     HttpErrorResponse,
//     HttpEvent,
//     HttpHandler,
//     HttpInterceptor,
//     HttpRequest,
// } from '@angular/common/http'
// import {catchError, Observable, throwError} from 'rxjs'
// import {slug_to_sentence} from '@broca-studio/pipes/slug-to-sentence.pipe'
// import {AlertService} from '@broca-studio/services/alert.service'

// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {
//     constructor(private _alertService: AlertService) {}

//     excludeKeys: string[] = []

//     excludedCodes: string[] = []

//     intercept(
//         req: HttpRequest<any>,
//         next: HttpHandler,
//     ): Observable<HttpEvent<any>> {
//         let request = req.clone()

//         return next.handle(request).pipe(
//             catchError((http: HttpErrorResponse) => {
//                 this.handleError(http)

//                 return throwError(http)
//             }),
//         )
//     }

//     handleError(http: HttpErrorResponse) {
//         if (!window.navigator.onLine) {
//             return this._alertService.addAlert({
//                 type: 'error',
//                 title: 'No Internet',
//                 message: 'Seems there is a problem with your connection',
//             })
//         }

//         for (let error of http.error.errors) {
//             this._alertService.addAlert({
//                 title: `Error in ${error.field}`,
//                 message: error.message,
//                 type: 'error',
//             })
//         }

//         for (let key in http.error.errors) {
//             for (let error of http.error.errors[key]) {
//                 this._alertService.addAlert({
//                     title: `Error in ${slug_to_sentence(key)}`,
//                     message: error,
//                     type: 'error',
//                 })
//             }
//         }

//         if (http.error.key !== undefined) {
//             this._alertService.addAlert({
//                 title: `Error in ${slug_to_sentence(http.error.key)}`,
//                 message: http.error.message,
//                 type: 'error',
//             })
//         }

//         if (!empty(http.error.errors)) {
//             for (const error of http.error.errors) {
//                 this._alertService.addAlert({
//                     title: `${slug_to_sentence(error.rule)}`,
//                     message: error.message,
//                     type: 'error',
//                 })
//             }
//         }

//         if (
//             !empty(http.error.key) &&
//             !this.excludeKeys.includes(http.error.key)
//         ) {
//             this._alertService.addAlert({
//                 title: `${slug_to_sentence(http.error.key)}`,
//                 message: http.error.message,
//                 type: 'error',
//             })
//         }

//         if (!empty(http.error.code)) {
//             this._alertService.addAlert({
//                 title: `${slug_to_sentence(http.error.code)}`,
//                 message: http.error.message,
//                 type: 'error',
//             })
//         }
//     }
// }
