/**
 *
 * OffersListContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import OffersList from 'components/RestaurantsPage/RestaurantsSection/OffersList';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectOffers } from './selectors';
import reducer from './reducer';
import saga from './saga';

const mapStateToProps = createStructuredSelector({
  offers: makeSelectOffers,
});

const mapDispatchToProps = {};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
@injectReducer({ key: 'offersListContainer', reducer })
@injectSaga({ key: 'offersListContainer', saga })
/* eslint-disable react/prefer-stateless-function */
export default class OffersListContainer extends React.Component {
  static propTypes = {
    offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    const { offers } = this.props;
    return <OffersList offers={offers} />;
  }
}
