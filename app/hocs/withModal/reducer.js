import { toggleModal } from './actions';

export const initialState = {
  isOpen: false,
};

const withModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case toggleModal.type:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};

export default withModalReducer;
