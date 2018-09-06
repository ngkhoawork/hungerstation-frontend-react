import PropTypes from 'prop-types';

export const filterCategoryPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
});

export const filtersCategoryPropTypes = PropTypes.arrayOf(
  filterCategoryPropTypes,
);
