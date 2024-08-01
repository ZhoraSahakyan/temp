import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SafePipe } from './pipes';

@NgModule({
  declarations: [
    // Pipes
    SafePipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ReactiveFormsModule,

    // Pipes
    SafePipe,
  ]
})
export class SharedModule {
}
