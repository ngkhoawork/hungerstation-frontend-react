export default function createAction(type, payloadCreator) {
  const action = (payload, meta) => ({
    type,
    payload: payloadCreator(payload),
    meta,
  });

  action.type = type;

  return action;
}
