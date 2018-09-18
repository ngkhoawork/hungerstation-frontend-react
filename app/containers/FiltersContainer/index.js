/**
 *
 * FiltersContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FiltersSection from 'components/RestaurantsPage/FiltersSection';

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
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        isSelected: PropTypes.bool.isRequired,
      }),
    ).isRequired,
    cuisines: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        isSelected: PropTypes.bool.isRequired,
      }),
    ).isRequired,
    deliveryTypes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        isSelected: PropTypes.bool.isRequired,
      }),
    ).isRequired,
  };

  render() {
    const { tags, cuisines, deliveryTypes } = this.props;
    return (
      <FiltersSection
        tags={tags}
        cuisines={cuisines}
        deliveryTypes={deliveryTypes}
      />
    );
  }
}
