import React from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import { connect } from 'react-redux';
import {
  makeSampleCities,
  makeSelectDistricts,
} from 'modules/location/selectors';
import { createStructuredSelector } from 'reselect';
import { sample } from 'utils/helpers';
import StyledContainer from './StyledContainer';
import DeliveryItem from './DeliveryItem';
import messages from './messages';

// const deliveries = [
//   {
//     id: 1,
//     title: intl.formatMessage(messages.title),
//     region: intl.formatMessage(messages.dubai),
//     description: intl.formatMessage(messages.description),
//   },
//   {
//     id: 2,
//     title: intl.formatMessage(messages.title),
//     region: intl.formatMessage(messages.dubai),
//     description: intl.formatMessage(messages.description),
//   },
//   {
//     id: 3,
//     title: intl.formatMessage(messages.title),
//     region: intl.formatMessage(messages.doha),
//     description: intl.formatMessage(messages.description),
//   },
//   {
//     id: 4,
//     title: intl.formatMessage(messages.title),
//     region: intl.formatMessage(messages.doha),
//     description: intl.formatMessage(messages.description),
//   },
//   {
//     id: 5,
//     title: intl.formatMessage(messages.title),
//     region: intl.formatMessage(messages.dubai),
//     description: intl.formatMessage(messages.description),
//   },
//   {
//     id: 6,
//     title: intl.formatMessage(messages.title),
//     region: intl.formatMessage(messages.doha),
//     description: intl.formatMessage(messages.description),
//   },
//   {
//     id: 7,
//     title: intl.formatMessage(messages.title),
//     region: intl.formatMessage(messages.dubai),
//     description: intl.formatMessage(messages.description),
//   },
//   {
//     id: 8,
//     title: intl.formatMessage(messages.title),
//     region: intl.formatMessage(messages.dubai),
//     description: intl.formatMessage(messages.description),
//   },
//   {
//     id: 9,
//     title: intl.formatMessage(messages.title),
//     region: intl.formatMessage(messages.doha),
//     description: intl.formatMessage(messages.description),
//   },
// ];
const DeliveryRegions = ({ cities, districts }) => (
  <StyledContainer>
    {!!cities.length &&
      !!Object.values(districts).length &&
      cities.map(city => (
        <DeliveryItem
          title={intl.formatMessage(messages.title)}
          key={city.name}
          city={city}
          districts={sample(districts[city.id], 16)}
        />
      ))}
  </StyledContainer>
);
DeliveryRegions.propTypes = {
  cities: PropTypes.array.isRequired,
  districts: PropTypes.array.isRequired,
};

export default connect(
  createStructuredSelector({
    cities: makeSampleCities(),
    districts: makeSelectDistricts(),
  }),
)(DeliveryRegions);
