import { initialState } from './reducer';

export const selectCheckoutState = state => state.get('checkout', initialState);
