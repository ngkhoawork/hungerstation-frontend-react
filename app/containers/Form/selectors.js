import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectForm = state => state.get('form', initialState);

const makeSelectSubmitting = () =>
  createSelector(selectForm, formState => formState.get('submitting'));

const makeSelectErrors = () =>
  createSelector(selectForm, formState => formState.get('errors', null, null));

export { selectForm, makeSelectSubmitting, makeSelectErrors };
