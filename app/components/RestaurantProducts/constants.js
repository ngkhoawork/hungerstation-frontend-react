import PropTypes from 'prop-types';

export const RestaurantProductPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
});
