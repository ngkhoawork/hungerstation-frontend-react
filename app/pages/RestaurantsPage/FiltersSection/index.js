import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleModal } from 'hocs/withModal/actions';
import { makeSelectIsOpen } from 'hocs/withModal/selectors';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Group from 'components/Group';
import Paragraph from 'components/Paragraph';
import intl from 'utils/intlService';
import {
  selectFilters,
  selectChosenKitchenFiltersArray,
  selectChosenDeliveryOption,
  selectDynamicFilters,
} from 'modules/restaurants/selectors';
import {
  toggleFilterAction,
  resetChosenFiltersAction,
  discartFiltersToSavedStageAction,
} from 'modules/restaurants/actions';
import Header from './Header';
import Cuisines from './Cuisines';
import DeliveryTypes from './DeliveryTypes';
import Orders from './Orders';
import { ButtonWrapper, ActionsWrapper, ContentWrapper } from './Styled';

import messages from './messages';

const selectIsOpen = makeSelectIsOpen();

export const decorate = connect(
  state => ({
    filters: selectFilters(state),
    chosenKitchens: selectChosenKitchenFiltersArray(state),
    chosenDeliveryOption: selectChosenDeliveryOption(state),
    isModalOpen: selectIsOpen(state),
    dynamicFilters: selectDynamicFilters(state),
  }),
  {
    toggleFilterAction,
    resetChosenFiltersAction,
    discartFiltersToSavedStageAction,
    toggleModal,
  },
);

const FiltersSection = ({
  isModalOpen,
  toggleModal,
  filters: { kitchens, delivery_options },
  toggleFilterAction,
  resetChosenFiltersAction,
  discartFiltersToSavedStageAction,
  chosenKitchens,
  chosenDeliveryOption,
  dynamicFilters,
}) => (
  <React.Fragment>
    <Header
      isModalOpened={isModalOpen}
      resetFilters={resetChosenFiltersAction}
      closeModal={() => {
        discartFiltersToSavedStageAction();
        toggleModal(false);
      }}
      dynamicFilters={dynamicFilters}
    />
    <ContentWrapper>
      <Cuisines
        kitchens={kitchens}
        toggleFilter={toggleFilterAction}
        chosenKitchens={chosenKitchens}
        title={intl.formatMessage(messages.cuisines)}
      />

      <Orders title={intl.formatMessage(messages.order)} />

      <DeliveryTypes
        deliveryOptions={delivery_options}
        toggleFilter={toggleFilterAction}
        chosenOption={chosenDeliveryOption}
        title={intl.formatMessage(messages.deliveryType)}
      />
    </ContentWrapper>

    {/* BUTTONS IN MODAL */}
    <ActionsWrapper>
      <Group>
        <Icon name="delete" size={12} />
        <Paragraph margin="0 0 0 5px">
          {intl.formatMessage(messages.clear)}
        </Paragraph>
      </Group>

      <ButtonWrapper
        onClick={() => toggleModal(false)}
        isModalOpened={isModalOpen}
      >
        <Button primary label={intl.formatMessage(messages.buttonApply)}>
          <Icon name="checkmark" />
        </Button>
      </ButtonWrapper>
    </ActionsWrapper>
  </React.Fragment>
);

FiltersSection.propTypes = {
  isModalOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  toggleFilterAction: PropTypes.func,
  resetChosenFiltersAction: PropTypes.func,
  filters: PropTypes.shape({
    kitchens: PropTypes.array,
    delivery_options: PropTypes.array,
  }),
  chosenKitchens: PropTypes.array,
  chosenDeliveryOption: PropTypes.string,
  discartFiltersToSavedStageAction: PropTypes.func,
  dynamicFilters: PropTypes.array,
};

export default decorate(FiltersSection);
