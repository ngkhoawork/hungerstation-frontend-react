import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

export const offerPropTypes = ImmutablePropTypes.contains({
  id: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}).isRequired;

export const offersPropTypes = ImmutablePropTypes.contains({
  options: ImmutablePropTypes.listOf(offerPropTypes),
});
