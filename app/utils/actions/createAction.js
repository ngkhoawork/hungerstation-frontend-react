export default function createAction(type) {
  const actionCreator = (payload, meta) => ({
    type,
    payload,
    meta,
  });

  actionCreator.type = type;

  return actionCreator;
}
