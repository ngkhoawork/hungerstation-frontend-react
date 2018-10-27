import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import intl from 'utils/intlService';
import { gold } from 'utils/css/colors';
import Button from 'components/Button';
import Icon from 'components/Icon';
import CircledItem from 'components/CircledItem';
import Expander from './Expander';
import Header from '../Header';

import ClearAll from '../ClearAll';
import Tags from '../Tags';
import Cuisines from '../Cuisines';
import DeliveryTypes from '../DeliveryTypes';
import Orders from '../Orders';
import { ContentWrapper } from '../Styled';
import messages from '../messages';
import { decorate } from '../index';

const MobileFiltersSection = ({
  toggleModal,
  filters: { kitchens, delivery_options },
  toggleFilterAction,
  discartFiltersToSavedStageAction,
  chosenKitchens,
  chosenDeliveryOption,
  resetChosenFiltersAction,
}) => (
  <Wrapper>
    <Header />

    <ContentWrapper>
      <ClearAllPosition>
        <ClearAll resetFilters={resetChosenFiltersAction} />
      </ClearAllPosition>

      <Expander label={intl.formatMessage(messages.tags)} withoutQuantity>
        <Tags />
      </Expander>

      <Expander
        label={intl.formatMessage(messages.cuisines)}
        quantity={chosenKitchens.length}
      >
        <Cuisines
          kitchens={kitchens}
          toggleFilter={toggleFilterAction}
          chosenKitchens={chosenKitchens}
        />
      </Expander>

      <Expander label={intl.formatMessage(messages.order)} withoutQuantity>
        <Orders />
      </Expander>

      <Expander
        label={intl.formatMessage(messages.deliveryType)}
        withoutQuantity
      >
        <DeliveryTypes
          deliveryOptions={delivery_options}
          toggleFilter={toggleFilterAction}
          chosenOption={chosenDeliveryOption}
        />
      </Expander>
    </ContentWrapper>

    {/* MODAL BUTTONS */}
    <CloseButtonWrapper
      onClick={() => {
        discartFiltersToSavedStageAction();
        toggleModal(false);
      }}
    >
      <CircledItem color={gold} width={28}>
        <Icon name="close" size={8} />
      </CircledItem>
    </CloseButtonWrapper>

    <ApllyButtonWrapper onClick={() => toggleModal(false)}>
      <Button
        primary
        fontSize={20}
        label={intl.formatMessage(messages.buttonApply)}
      >
        <Icon name="checkmark" />
      </Button>
    </ApllyButtonWrapper>
  </Wrapper>
);

export default decorate(MobileFiltersSection);

MobileFiltersSection.propTypes = {
  toggleModal: PropTypes.func,
  toggleFilterAction: PropTypes.func,
  filters: PropTypes.shape({
    kitchens: PropTypes.array,
    delivery_options: PropTypes.array,
  }),
  chosenKitchens: PropTypes.array,
  chosenDeliveryOption: PropTypes.string,
  discartFiltersToSavedStageAction: PropTypes.func,
  resetChosenFiltersAction: PropTypes.func,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
`;

const ApllyButtonWrapper = styled.div`
  height: 60px;
  width: 100%;
  position: absolute;
  bottom: 0px;
`;

const ClearAllPosition = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
`;

const CloseButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0px;
  top: 4px;
  background-color: transparent;
`;
