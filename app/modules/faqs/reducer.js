import { fromJS } from 'immutable';
import { fetchFaqsRequest, fetchFaqsSuccess, fetchFaqsError } from './actions';

export const initialState = fromJS({
  faqs: {},
});

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case fetchFaqsRequest.type:
      return state.set('isLoading', true);

    case fetchFaqsSuccess.type: {
      return state.set('isLoading', false).set('faqs', payload);
    }

    case fetchFaqsError.type:
      return state.set('isLoading', false);

    default:
      return state;
  }
}

export default reducer;
