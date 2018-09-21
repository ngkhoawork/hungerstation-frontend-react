export default function createAction(type) {
  const action = (payload, meta) => ({
    type,
    payload,
    meta,
  });

  action.type = type;

  return action;
}
