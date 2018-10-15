import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import Icon from 'components/Icon';
import Group from 'components/Group';
import Paragraph from 'components/Paragraph';
import intl from 'utils/intlService';
import {
  selectFilters,
  selectChosenKitchenFiltersArray,
  selectChosenDeliveryOptionsArray,
} from 'modules/restaurants/selectors';
import { toggleFilterAction } from 'modules/restaurants/actions';
import Header from './Header';
import Cuisines from './Cuisines';
import DeliveryTypes from './DeliveryTypes';
import Orders from './Orders';
import { ButtonWrapper, ActionsWrapper, ContentWrapper } from './Styled';

import messages from './messages';

const decorate = connect(
  state => ({
    filters: selectFilters(state),
    chosenKitchens: selectChosenKitchenFiltersArray(state),
    chosenDeliveryOptions: selectChosenDeliveryOptionsArray(state),
  }),
  { toggleFilterAction },
);

const FiltersSection = ({
  isModalOpened = false,
  closeModal = () => console.log('close modal'),
  filters: { kitchens, delivery_options },
  toggleFilterAction,
  chosenKitchens,
  chosenDeliveryOptions,
}) => (
  <React.Fragment>
    <Header isModalOpened={isModalOpened} closeModal={closeModal} />
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
        chosenOptions={chosenDeliveryOptions}
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

      <ButtonWrapper isModalOpened={isModalOpened}>
        <Button primary label={intl.formatMessage(messages.buttonApply)}>
          <Icon name="checkmark" />
        </Button>
      </ButtonWrapper>
    </ActionsWrapper>
  </React.Fragment>
);

FiltersSection.propTypes = {
  isModalOpened: PropTypes.bool,
  closeModal: PropTypes.func,
  toggleFilterAction: PropTypes.func,
  filters: PropTypes.shape({
    kitchens: PropTypes.array,
    delivery_options: PropTypes.array,
  }),
  chosenKitchens: PropTypes.array,
  chosenDeliveryOptions: PropTypes.array,
};

export default decorate(FiltersSection);
