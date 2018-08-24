import { fromJS } from 'immutable';

export const initialState = fromJS({
  submitting: false,
  errors: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'START_SUBMIT':
      return state.merge({
        submitting: true,
      });
    case 'STOP_SUBMIT':
      return state.merge({
        submitting: false,
        errors: action.payload,
      });
    case 'CLEAR_FORM':
      return initialState;
    default:
      return state;
  }
};
