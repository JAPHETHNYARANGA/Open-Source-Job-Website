import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { JobsService } from "../Data/services/jobs.service";
import * as JobActions from './job.actions';
import { catchError,map, mergeMap, of } from "rxjs";




@Injectable()
export class JobsEfects{
    constructor(private actions$: Actions, private jobsService : JobsService){}


    loadJobs$ = createEffect(() =>
    this.actions$.pipe(
        ofType(JobActions.loadJobs),
        mergeMap(() =>
            this.jobsService.getJobs().pipe(
                map(jobs => JobActions.loadJobsSuccess({ jobs })),
                catchError(error => of(JobActions.loadJobsFailure({ error })))
            )
        )
    )
);
}