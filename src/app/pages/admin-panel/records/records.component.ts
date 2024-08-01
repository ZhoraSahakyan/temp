import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, inject, Signal, signal } from '@angular/core';

import { UserDataProviderService } from '../../../core/services/';



@Component({
  selector: 'app-records',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './records.component.html',
  styleUrl: './records.component.scss'
})
export class RecordsComponent {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly userDataProviderService: UserDataProviderService = inject(UserDataProviderService);

  public records: Signal<any[]> = signal(this.route.snapshot.data['records'] || []);
  public isManager: Signal<boolean> = signal(this.userDataProviderService.isManager());
  public isEmployee: Signal<boolean> = signal(this.userDataProviderService.isEmployee());
}
