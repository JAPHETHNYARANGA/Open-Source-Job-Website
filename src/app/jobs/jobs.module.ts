import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { JobsEfects } from './state/jobs.effects';
import { EffectsModule } from '@ngrx/effects';
import { jobReducer } from './state/job.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({jobs : jobReducer}),
    EffectsModule.forRoot([JobsEfects])
  ]
})
export class JobsModule { }
