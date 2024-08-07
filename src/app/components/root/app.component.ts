import { Component, inject, OnInit } from '@angular/core';

import { UserDataProviderService } from '../../core/services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private readonly userDataProviderService: UserDataProviderService = inject(UserDataProviderService);

  ngOnInit(): void {
    if (localStorage.getItem('access_token')) {
      const user = localStorage.getItem('user');
      user && this.userDataProviderService.setUser(JSON.parse(user));
    }
  }
}
