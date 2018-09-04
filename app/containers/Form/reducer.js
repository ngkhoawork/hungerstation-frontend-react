import { fromJS } from 'immutable';
import { createReducer } from 'utils/form/createReducer';

const START_SUBMIT = 'START_SUBMIT';
const STOP_SUBMIT = 'STOP_SUBMIT';
const CLEAR_FORM = 'CLEAR_FORM';

export const initialState = fromJS({
  submitting: false,
  errors: null,
});

const onClearForm = () => initialState;
const onStartSubmit = state => state.merge({ submitting: true });
const onStopSubmit = (state, action) =>
  state.merge({ submitting: false, errors: action.payload });

export default createReducer(initialState, {
  [START_SUBMIT]: onStartSubmit,
  [STOP_SUBMIT]: onStopSubmit,
  [CLEAR_FORM]: onClearForm,
});
