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
  showModal as showModalAction,
  hideModal as hideModalAction,
} from '../ModalContainer/actions';
import { toggleSection as toggleSectionAction } from './actions';

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
  closeModal: hideModalAction,
  toggleSection: toggleSectionAction,
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
    closeModal: PropTypes.func.isRequired,
    isModalOpened: PropTypes.bool.isRequired,
    toggleSection: PropTypes.func.isRequired,
  };

  render() {
    const {
      children,
      tags,
      cuisines,
      deliveryTypes,
      openModal,
      closeModal,
      isModalOpened,
      toggleSection,
    } = this.props;
    return (
      <React.Fragment>
        {children({
          tags,
          cuisines,
          deliveryTypes,
          openModal,
          closeModal,
          isModalOpened,
          toggleSection,
        })}
      </React.Fragment>
    );
  }
}
