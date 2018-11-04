import { createSelector } from 'reselect';

export const selectGroupState = state => state.get('faqs', state).toJS();

export const selectGroupName = createSelector(
  selectGroupState,
  state => state.faqs.name,
);
