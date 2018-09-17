/**
 *
 * OffersListContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'recompose';

import OffersList from 'pages/RestaurantsPage/RestaurantsSection/OffersList';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectOffers } from './selectors';
import reducer from './reducer';
import saga from './saga';

const mapStateToProps = createStructuredSelector({
  offers: makeSelectOffers,
});

const enhanced = compose(
  injectReducer({ key: 'offersListContainer', reducer }),
  injectSaga({ key: 'offersListContainer', saga }),
  connect(mapStateToProps),
);

export const OffersListContainer = ({ offers }) => (
  <OffersList offers={offers} />
);

OffersListContainer.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default enhanced(OffersListContainer);
