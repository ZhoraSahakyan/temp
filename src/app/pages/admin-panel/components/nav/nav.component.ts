import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  public navItems = [
    {
      name: 'Employees',
      route: 'employees'
    },
    {
      name: 'Records',
      route: 'records'
    },
  ]
}
