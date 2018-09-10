import PropTypes from 'prop-types';

export const filterCategoryPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
});

export const filtersCategoryPropTypes = PropTypes.shape({
  isExpanded: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(filterCategoryPropTypes),
});
