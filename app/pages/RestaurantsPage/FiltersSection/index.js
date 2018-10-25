import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleModal } from 'hocs/withModal/actions';
import intl from 'utils/intlService';
import {
  selectFilters,
  selectChosenKitchenFiltersArray,
  selectChosenDeliveryOption,
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
import { ContentWrapper } from './Styled';

import messages from './messages';

export const decorate = connect(
  state => ({
    filters: selectFilters(state),
    chosenKitchens: selectChosenKitchenFiltersArray(state),
    chosenDeliveryOption: selectChosenDeliveryOption(state),
  }),
  {
    toggleFilterAction,
    resetChosenFiltersAction,
    discartFiltersToSavedStageAction,
    toggleModal,
  },
);

const FiltersSection = ({
  filters: { kitchens, delivery_options },
  toggleFilterAction,
  chosenKitchens,
  chosenDeliveryOption,
}) => (
  <React.Fragment>
    <Header withClear />
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
  </React.Fragment>
);

FiltersSection.propTypes = {
  toggleFilterAction: PropTypes.func,
  filters: PropTypes.shape({
    kitchens: PropTypes.array,
    delivery_options: PropTypes.array,
  }),
  chosenKitchens: PropTypes.array,
  chosenDeliveryOption: PropTypes.string,
};

export default decorate(FiltersSection);
