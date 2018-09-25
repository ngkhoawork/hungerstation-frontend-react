export default function createAction(type, payloadCreator = () => null) {
  const action = (payload, meta) => ({
    type,
    payload: payloadCreator(payload),
    meta,
  });

  action.type = type;

  return action;
}
