export const getLabelKey = (options, props) => {
  if (options[0][props.labelKey]) return props.labelKey;
  if (options[0].label) return 'label';
  return 'name';
};

export const getValueKey = (options, props) => {
  if (options[0][props.valueKey]) return props.valueKey;
  if (options[0].value) return 'value';
  return 'id';
};
