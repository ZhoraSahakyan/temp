import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";

import { EmployeesService } from "./employees.service";

export const EmployeesResolver: ResolveFn<any[]> = () => {
  const employeesService: EmployeesService = inject(EmployeesService);

  return employeesService.getEmployeesByManagerId();
}
