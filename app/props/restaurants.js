import PropTypes from 'prop-types';

export const restaurantPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  deliveryTimeMin: PropTypes.number.isRequired,
  deliveryTimeMax: PropTypes.number.isRequired,
  minOrder: PropTypes.number.isRequired,
});

export const restaurantsPropTypes = PropTypes.arrayOf(restaurantPropTypes);
