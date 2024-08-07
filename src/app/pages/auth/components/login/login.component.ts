import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly authService: AuthService = inject(AuthService);
  private readonly router: Router = inject(Router);

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  public isLoading: boolean = false;

  public login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    const { email, password } = this.loginForm.getRawValue();

    this.authService.login(email, password)
      .subscribe(
        () => {
          console.log('Logged in successfully');

          this.router.navigate(['/admin']);
        },
        (error) => {
          console.error('Error logging in', error);
        },
        () => {
          this.isLoading = false;
        }
      );
  }
}
