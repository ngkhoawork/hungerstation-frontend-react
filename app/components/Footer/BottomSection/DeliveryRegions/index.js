import React from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import { connect } from 'react-redux';
import { makeSampleCities } from 'modules/location/selectors';
import { createStructuredSelector } from 'reselect';
import StyledContainer from './StyledContainer';
import DeliveryItem from './DeliveryItem';
import messages from './messages';

const DeliveryRegions = ({ cities }) => (
  <StyledContainer>
    {!!cities.length &&
      cities.map(city => (
        <DeliveryItem
          title={intl.formatMessage(messages.title)}
          key={`delivery-region-${city.city.name}`}
          city={city}
        />
      ))}
  </StyledContainer>
);
DeliveryRegions.propTypes = {
  cities: PropTypes.array.isRequired,
};

export default connect(
  createStructuredSelector({
    cities: makeSampleCities(),
  }),
)(DeliveryRegions);
