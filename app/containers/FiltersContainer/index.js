/**
 *
 * FiltersContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { filtersCategoryPropTypes } from 'propTypes/filters';
import { compose } from 'recompose';

import injectSaga from 'utils/injectors/injectSaga';
import injectReducer from 'utils/injectors/injectReducer';
import {
  showModal as showModalAction,
  hideModal as hideModalAction,
} from 'containers/ModalContainer/actions';
import { makeSelectIsOpen } from 'containers/ModalContainer/selectors';
import { toggleSection as toggleSectionAction } from './actions';

import {
  makeSelectTags,
  makeSelectCuisines,
  makeSelectDeliveryTypes,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

const mapStateToProps = createStructuredSelector({
  tags: makeSelectTags(),
  cuisines: makeSelectCuisines(),
  deliveryTypes: makeSelectDeliveryTypes(),
  isModalOpened: makeSelectIsOpen(),
});

const mapDispatchToProps = {
  openModal: showModalAction,
  closeModal: hideModalAction,
  toggleSection: toggleSectionAction,
};

const enhanced = compose(
  injectReducer({ key: 'filtersContainer', reducer }),
  injectSaga({ key: 'filtersContainer', saga }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
);

export const FiltersContainer = ({
  children,
  tags,
  cuisines,
  deliveryTypes,
  openModal,
  closeModal,
  isModalOpened,
  toggleSection,
}) => (
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

FiltersContainer.propTypes = {
  tags: filtersCategoryPropTypes,
  cuisines: filtersCategoryPropTypes,
  deliveryTypes: filtersCategoryPropTypes,
  children: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  isModalOpened: PropTypes.bool.isRequired,
  toggleSection: PropTypes.func.isRequired,
};

export default enhanced(FiltersContainer);
