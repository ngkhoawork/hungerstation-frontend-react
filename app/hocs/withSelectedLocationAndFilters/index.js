import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { keyBy, pick, values, flow, find } from 'lodash/fp';
import { selectDistrict, selectCity } from 'modules/location/selectors';
import { selectRestaurant } from 'modules/restaurant/selectors';
import {
  selectChosenDeliveryOption,
  selectChosenKitchenFiltersArray,
  selectFilters,
} from 'modules/restaurants/selectors';
import intl from 'utils/intlService';
import messages from './messages';

const pickArrayElementsByProp = propType => array =>
  flow(
    keyBy(propType),
    pick(array),
    values,
  );

const pickArrayElementsByIds = pickArrayElementsByProp('id');

export const mapStateToProps = createSelector(
  selectCity,
  selectDistrict,
  selectRestaurant,
  selectFilters,
  selectChosenKitchenFiltersArray,
  selectChosenDeliveryOption,
  (
    city,
    district,
    branch,
    { delivery_options, kitchens },
    kitchensIds,
    deliveryOption,
  ) => ({
    city,
    district,
    filters: [
      {
        key: 'all-cuisines',
        to: '/',
        /* eslint-disable */
        label: kitchensIds.length
          ? pickArrayElementsByIds(kitchensIds)(kitchens).reduce(
            (acc, { name }) => [...acc, name],
            [],
          ).join(', ')
          : intl.formatMessage(messages.allCuisines),
        /* eslint-enable */
      },
      {
        key: deliveryOption,
        to: '/',
        label:
          deliveryOption === 'all'
            ? intl.formatMessage(messages.allDeliveryTypes)
            : find({ type: deliveryOption }, delivery_options).name,
      },
    ],
    branch,
  }),
);

export default WrapperComponent => connect(mapStateToProps)(WrapperComponent);
