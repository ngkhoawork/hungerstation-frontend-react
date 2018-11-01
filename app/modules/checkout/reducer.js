import { selectDeliveryOption } from './actions';

export const initialState = {};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case selectDeliveryOption.type:
      return Object.assign({}, state, { selectedDeliveryOption: payload });

    default:
      return state;
  }
}

export default reducer;
