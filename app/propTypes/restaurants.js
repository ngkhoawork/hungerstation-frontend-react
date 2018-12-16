import PropTypes from 'prop-types';

export const restaurantPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  deliveryTime: PropTypes.number.isRequired,
  minOrder: PropTypes.number.isRequired,
  rateAverage: PropTypes.number.isRequired,
  coverPhoto: PropTypes.array,
});

export const restaurantsPropTypes = PropTypes.arrayOf(restaurantPropTypes);
