import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, retry, tap } from 'rxjs';

@Injectable()
export class RecordsService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  getUserRecords(userIds: number[]): Observable<any> {
    const params = new HttpParams();
    userIds.forEach((userId) => params.append('userIds', userId.toString()));

    return this.httpClient.get('/records', { params })
      .pipe(
        retry(3),
        tap((records) => {
          console.log('Records:', records)
        })
      );
  }

  addNewRecord(payload: { [key: string]: string }): Observable<any> {
    return this.httpClient.post('/records', {})
      .pipe(
        retry(3),
        tap((record) => {
          console.log('New record:', record)
        }),
        map(() => {
          return { ...payload, id: Math.random() }
        })
      );
  }
}
