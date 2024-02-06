import { createReducer, on } from "@ngrx/store";
import * as JobActions from './job.actions';


const initialState: any[] = [];

export const jobReducer = createReducer(
    initialState,
    on(JobActions.loadJobsSuccess, (state, { jobs }) => [...jobs]),
    on(JobActions.loadJobsFailure, (state, _action) => [])

)