import { Observable, retry, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

import { CookieService, JwtTokenService } from '../../../core/services';

@Injectable()
export class AuthService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly cookieService: CookieService = inject(CookieService);
  private readonly jwtTokenService: JwtTokenService = inject(JwtTokenService);

  public login(email: string, password: string): Observable<any> {
    return this.http.post('/login', { email, password })
      .pipe(
        retry(3),
        tap((response: any) => {
          this.cookieService.set('access_token', response.access_token);
          this.jwtTokenService.setUser();
        })
      );
  }

  public register(name: string, email: string, password: string): Observable<any> {
    return this.http.post('/registration', { name, email, password })
      .pipe(
        retry(3),
      );
  }
}
