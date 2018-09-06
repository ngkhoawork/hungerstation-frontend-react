/**
 *
 * FiltersContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { filtersCategoryPropTypes } from 'props/filters';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectTags,
  makeSelectCuisines,
  makeSelectDeliveryTypes,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

const mapStateToProps = createStructuredSelector({
  tags: makeSelectTags,
  cuisines: makeSelectCuisines,
  deliveryTypes: makeSelectDeliveryTypes,
});

const mapDispatchToProps = {};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
@injectReducer({ key: 'filtersContainer', reducer })
@injectSaga({ key: 'filtersContainer', saga })
/* eslint-disable react/prefer-stateless-function */
export default class FiltersContainer extends React.Component {
  static propTypes = {
    tags: filtersCategoryPropTypes,
    cuisines: filtersCategoryPropTypes,
    deliveryTypes: filtersCategoryPropTypes,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, tags, cuisines, deliveryTypes } = this.props;
    return (
      <React.Fragment>
        {children({ tags, cuisines, deliveryTypes })}
      </React.Fragment>
    );
  }
}
