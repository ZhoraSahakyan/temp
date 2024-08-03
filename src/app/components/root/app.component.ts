import { Component, inject, OnInit } from '@angular/core';
import { CookieService } from '../../core/services/cookie.service';
import { JwtTokenService } from '../../core/services/jwt-token.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private readonly cookieService: CookieService = inject(CookieService);
  private readonly jwtToken: JwtTokenService = inject(JwtTokenService);

  ngOnInit(): void {
    if (this.cookieService.get('access_token')) {
      this.jwtToken.setToken(this.cookieService.get('access_token'));
      this.jwtToken.setUser();
    }
  }
}
