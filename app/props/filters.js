import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

export const filterCategoryPropTypes = ImmutablePropTypes.contains({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
});

export const filtersCategoryPropTypes = ImmutablePropTypes.contains({
  isExpanded: PropTypes.bool.isRequired,
  options: ImmutablePropTypes.listOf(filterCategoryPropTypes),
});
