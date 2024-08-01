import { inject, Injectable } from '@angular/core';

import { UserDataProviderService } from './user-data-provider.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {
  private readonly userDataProviderService: UserDataProviderService = inject(UserDataProviderService);

  private jwtToken: string;
  private decodedToken: { [key: string]: any };

  setToken(token: string): void {
    if (token) {
      this.jwtToken = token;
    }
  }

  decodeToken(): void {
    if (this.jwtToken) {
      this.decodedToken = jwtDecode(this.jwtToken);
    }
  }

  setUser(): void {
    this.decodeToken();
    this.userDataProviderService.setUser(this.decodedToken['user']);
  }

  getDecodeToken() {
    return jwtDecode(this.jwtToken);
  }

  getExpiryTime(): string | null {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['exp'] : null;
  }

  isTokenExpired(): boolean {
    const expiryTime: string = this.getExpiryTime();

    if (expiryTime) {
      return ((1000 * +expiryTime) - (new Date()).getTime()) < 5000;
    } else {
      return false;
    }
  }
}
