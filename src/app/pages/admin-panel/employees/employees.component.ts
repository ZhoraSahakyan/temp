import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, inject, signal, Signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly employeesService: EmployeesService = inject(EmployeesService);

  public emailControl: FormControl = new FormControl('', [Validators.required, Validators.email]);

  public employees: Signal<any[]> = signal(this.route.snapshot.data['employees'] || []);

  public addNewEmployee(): void {
    this.employeesService.addNewEmployee({
      email: this.emailControl.value
    })
      .subscribe((employee: any) => {
        this.employees = signal([...this.employees(), employee]);
        this.emailControl.reset();
      });
  }
}
