import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable, retry, tap } from "rxjs";

@Injectable()
export class EmployeesService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  getEmployeesByManagerId(): Observable<any> {
    const params = new HttpParams();
    params.set('managerId', '1');

    return this.httpClient.get('/employees', { params })
      .pipe(
        retry(3),
        tap((employees) => {
          console.log('Employees:', employees)
        })
      );
  }

  addNewEmployee(payload: { [key: string]: string }): Observable<any> {
    return this.httpClient.post('/employees', {})
      .pipe(
        retry(3),
        tap((employee) => {
          console.log('New employee:', employee)
        }),
        map(() => {
          return { email: payload['email'], id: Math.random() }
        })
      );
  }
}
