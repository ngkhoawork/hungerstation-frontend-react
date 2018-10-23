import createAction from 'utils/actions/createAction';

export const toggleModal = createAction(
  'hocs/withModal/TOGGLE_MODAL',
  bool => bool,
);
