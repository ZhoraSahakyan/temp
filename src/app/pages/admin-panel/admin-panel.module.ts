import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { MainComponent } from './components/main/main.component';
import { EmployeesService } from './services/employees.service';
import { NavComponent } from './components/nav/nav.component';
import { RecordsService } from './services/records.service';



@NgModule({
  declarations: [
    MainComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule
  ],
  providers: [
    EmployeesService,
    RecordsService
  ],
})
export class AdminPanelModule { }
