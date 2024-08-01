import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";

import { RecordsService } from "./records.service";
import { UserDataProviderService } from '../../../core/services';

export const RecordsResolver: ResolveFn<any[]> = () => {
  const recordsService: RecordsService = inject(RecordsService);
  const userDataProviderService: UserDataProviderService = inject(UserDataProviderService);

  if (userDataProviderService.isManager()) {
    return recordsService.getUserRecords(userDataProviderService.getUser().employees.map(employee => employee.id) || [1, 2]);
  }
  return recordsService.getUserRecords([userDataProviderService.getUser().id]);
};
