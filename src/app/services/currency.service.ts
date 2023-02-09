// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
// import { catchError, delay, Observable, retry, tap, throwError } from 'rxjs';
// import { ICurrency } from '../models/currency';

// @Injectable({
//   providedIn: 'root'
// })

// export class ProductsService {
//   constructor(
//     private http: HttpClient
//     ) {
//   }

//   currency: ICurrency[] = [];

//   getAll(): Observable<ICurrency[]> {
//     return this.http.get<ICurrency[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json', {
//       params: new HttpParams({
//         fromString: 'limit=10'
//       })
//     }).pipe(
//       delay(1000),
//       retry(2),
//       tap(this.currency => this.currency = this.currency)
//     )
//   }
// }
