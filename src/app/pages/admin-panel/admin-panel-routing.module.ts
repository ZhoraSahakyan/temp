import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MainComponent } from "./components/main/main.component";
import { EmployeesResolver } from "./services/employees.resolver";
import { RecordsResolver } from "./services/records.resolver";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'employees',
        pathMatch: 'full'
      },
      {
        path: 'employees',
        resolve: {
          employees: EmployeesResolver
        },
        loadComponent: () => import('./employees/employees.component').then(m => m.EmployeesComponent)
      },
      {
        path: 'records',
        resolve: {
          records: RecordsResolver
        },
        loadComponent: () => import('./records/records.component').then(m => m.RecordsComponent)
      }
    ]
  },

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AdminPanelRoutingModule {
}
