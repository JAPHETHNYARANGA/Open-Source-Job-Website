import { Routes } from '@angular/router';
import { JobsComponent } from './jobs/Presentation/jobs/jobs.component';
import { JobSeekersComponent } from './job-seekers/Presentation/job-seekers/job-seekers.component';

export const routes: Routes = [
    {path:'', component: JobsComponent},
    {path:'job-seekers', component:JobSeekersComponent}
];
