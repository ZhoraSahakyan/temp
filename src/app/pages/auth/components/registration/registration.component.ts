import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  private readonly authService: AuthService = inject(AuthService);
  private readonly router: Router = inject(Router);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  public registrationForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    password_confirmation: new FormControl('', [Validators.required]),
  });

  public register(): void {
    if (this.registrationForm.invalid) {
      return;
    }

    this.authService.register(this.registrationForm.getRawValue())
      .subscribe(
        () => {
          this.router.navigate(['login'], { relativeTo: this.route.parent });
        },
        (error) => {
          console.error('Error registering', error);
        }
      );
  }
}
