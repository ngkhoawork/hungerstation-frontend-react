/**
 *
 * OffersListContainer
 *
 */

import React from 'react';
import { offersPropTypes } from 'props/offers';
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
    offers: offersPropTypes,
  };

  render() {
    const { offers } = this.props;
    return <OffersList offers={offers} />;
  }
}
