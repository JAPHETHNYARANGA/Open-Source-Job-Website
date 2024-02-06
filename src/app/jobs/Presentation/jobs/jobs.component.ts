import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../Data/services/jobs.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllJobs } from '../../state/jobs.selectors';
import { loadJobs } from '../../state/job.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent implements OnInit{

  jobs$ : Observable<readonly any[]>;

  constructor(private store :Store){
    this.jobs$ = this.store.select(selectAllJobs);
  }

  ngOnInit(): void {
     this.store.dispatch(loadJobs());
  }

}
