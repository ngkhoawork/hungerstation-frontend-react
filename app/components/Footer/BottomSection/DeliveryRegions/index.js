import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { selectCities } from 'modules/location/selectors';
import { selectCityAction } from 'modules/location/actions';
import { forwardTo } from 'utils/route';
import { createStructuredSelector } from 'reselect';
import StyledContainer from './StyledContainer';
import DeliveryItem from './DeliveryItem';

const handleScrollToTop = () => {
  document.querySelector('html').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const DeliveryRegions = ({ cities, onClick }) => (
  <StyledContainer>
    {!!cities.size &&
      cities.map(city => (
        <DeliveryItem
          key={`delivery-region-${city.get('name')}`}
          name={city.get('name')}
          onClick={onClick(city)}
        />
      ))}
  </StyledContainer>
);
DeliveryRegions.propTypes = {
  cities: ImmutablePropTypes.list.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default connect(
  createStructuredSelector({
    cities: selectCities,
  }),
  dispatch => ({
    onClick: city => () => {
      dispatch(selectCityAction(city.toJS()));
      handleScrollToTop();
      forwardTo('/');
    },
  }),
)(DeliveryRegions);
