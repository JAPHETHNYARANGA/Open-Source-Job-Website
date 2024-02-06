import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectJobState = createFeatureSelector<ReadonlyArray<any>>('jobs');

export const selectAllJobs = createSelector(
  selectJobState,
  (state: ReadonlyArray<any>) => state
);
