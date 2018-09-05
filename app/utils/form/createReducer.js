export const createReducer = (initial, handlers) => (
  state = initial,
  action,
) => {
  if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
    return handlers[action.type](state, action);
  }
  return state;
};
