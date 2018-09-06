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
import { showModal as showModalAction } from '../ModalContainer/actions';

import {
  makeSelectTags,
  makeSelectCuisines,
  makeSelectDeliveryTypes,
} from './selectors';
import { makeSelectIsOpen } from '../ModalContainer/selectors';
import reducer from './reducer';
import saga from './saga';

const mapStateToProps = createStructuredSelector({
  tags: makeSelectTags,
  cuisines: makeSelectCuisines,
  deliveryTypes: makeSelectDeliveryTypes,
  isModalOpened: makeSelectIsOpen,
});

const mapDispatchToProps = {
  openModal: showModalAction,
};

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
    children: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    isModalOpened: PropTypes.bool.isRequired,
  };

  render() {
    const {
      children,
      tags,
      cuisines,
      deliveryTypes,
      openModal,
      isModalOpened,
    } = this.props;
    return (
      <React.Fragment>
        {children({ tags, cuisines, deliveryTypes, openModal, isModalOpened })}
      </React.Fragment>
    );
  }
}
