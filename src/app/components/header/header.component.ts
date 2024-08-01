import { Router } from '@angular/router';
import { Component, inject, OnDestroy, OnInit, Signal, signal } from '@angular/core';

import { CookieService, UserDataProviderService } from '../../core/services';
import { User } from '../../core/models/interfaces/user';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private readonly userDataProviderService: UserDataProviderService = inject(UserDataProviderService);
  private readonly cookieService: CookieService = inject(CookieService);
  private readonly router: Router = inject(Router);

  public isLoggedIn: Signal<boolean> = signal(false);

  private destroy$: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    this.userDataProviderService.getUserDataAsObservable()
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: User) => {
          this.isLoggedIn = signal(!!user);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public logout(): void {
    this.userDataProviderService.setUser(null);
    this.cookieService.remove('access_token');

    this.router.navigate(['/auth/login']);
  }
}
