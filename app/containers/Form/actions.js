export const startSubmit = () => ({
  type: 'START_SUBMIT',
});

export const stopSubmit = (errors = null) => ({
  type: 'STOP_SUBMIT',
  payload: errors,
});

export const clearForm = () => ({
  type: 'CLEAR_FORM',
});
