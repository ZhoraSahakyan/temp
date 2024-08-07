import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, retry, switchMap, tap } from "rxjs";

import { environment } from "src/environments/environment";
import { UserDataProviderService } from '../../../core/services';

@Injectable()
export class AuthService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly userDataProviderService: UserDataProviderService = inject(UserDataProviderService);

  public login(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.API_BASE_URL}/login`, { email, password })
      .pipe(
        retry(1),
        tap((response: any) => {
          localStorage.setItem('access_token', response.access_token);
        }),
        switchMap(() => this.authenticate()),
      );
  }

  public register(payload: any): Observable<any> {
    return this.http.post(`${environment.API_BASE_URL}/register`, payload)
      .pipe(
        retry(3),
        tap((response: any) => {
          localStorage.setItem('access_token', response.access_token);
          this.userDataProviderService.setUser(response['user']);
        })
      );
  }

  public authenticate(): Observable<any> {
    return this.http.get(`${environment.API_BASE_URL}/me`)
      .pipe(
        retry(3),
        tap((response: any) => {
          this.userDataProviderService.setUser(response);
        })
      );
  }
}
