/**
 *
 * HomePageContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import HomePage from 'components/HomePage';
import makeSelectHomePageContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

const mapStateToProps = createStructuredSelector({
  homepagecontainer: makeSelectHomePageContainer(),
});

const mapDispatchToProps = {};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
@injectReducer({ key: 'homePageContainer', reducer })
@injectSaga({ key: 'homePageContainer', saga })
/* eslint-disable react/prefer-stateless-function */
export default class HomePageContainer extends React.Component {
  render() {
    return <HomePage />;
  }
}
