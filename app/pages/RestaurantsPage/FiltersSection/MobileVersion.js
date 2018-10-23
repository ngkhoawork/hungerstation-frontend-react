import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import Icon from 'components/Icon';
import Group from 'components/Group';
import Paragraph from 'components/Paragraph';
import intl from 'utils/intlService';
import Header from './Header';
import Cuisines from './Cuisines';
import DeliveryTypes from './DeliveryTypes';
import Orders from './Orders';
import { ButtonWrapper, ActionsWrapper, ContentWrapper } from './Styled';

import Expander from '../Expander';
import messages from './messages';
import { decorate } from './index';

const FiltersSection = ({
  isModalOpen,
  toggleModal,
  filters: { kitchens, delivery_options },
  toggleFilterAction,
  resetChosenFiltersAction,
  discartFiltersToSavedStageAction,
  chosenKitchens,
  chosenDeliveryOption,
}) => (
  <Wrapper>
    <Header
      isModalOpened={isModalOpen}
      resetFilters={resetChosenFiltersAction}
      closeModal={() => {
        discartFiltersToSavedStageAction();
        toggleModal(false);
      }}
    />
    <ContentWrapper>
      <Expander label={intl.formatMessage(messages.cuisines)}>
        <Cuisines
          kitchens={kitchens}
          toggleFilter={toggleFilterAction}
          chosenKitchens={chosenKitchens}
        />
      </Expander>

      <Expander label={intl.formatMessage(messages.order)}>
        <Orders />
      </Expander>

      <Expander label={intl.formatMessage(messages.deliveryType)}>
        <DeliveryTypes
          deliveryOptions={delivery_options}
          toggleFilter={toggleFilterAction}
          chosenOption={chosenDeliveryOption}
        />
      </Expander>
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
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

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
};

export default decorate(FiltersSection);
