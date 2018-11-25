import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { keyBy, pick, values, flow, find } from 'lodash/fp';

import { selectDistrict, selectCity } from 'modules/location/selectors';
import {
  selectChosenDeliveryOption,
  selectChosenKitchenFiltersArray,
  selectFilters,
} from 'modules/restaurants/selectors';

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
  selectFilters,
  selectChosenKitchenFiltersArray,
  selectChosenDeliveryOption,
  (
    city,
    district,
    { delivery_options, kitchens },
    kitchensIds,
    deliveryOption,
  ) => ({
    location: city && district ? [city, district] : [],
    filters: [
      {
        key: 'all-cuisines',
        to: '/',
        /* eslint-disable */
        label: kitchensIds.length
          ? pickArrayElementsByIds(kitchensIds)(kitchens).reduce(
            (acc, { name }) => [...acc, name],
            [],
          )
          : 'All Cuisines',
        /* eslint-anable */
      },
      {
        key: deliveryOption,
        to: '/',
        label:
          deliveryOption === 'all'
            ? 'All Delivery Types'
            : find({ type: deliveryOption }, delivery_options).name,
      },
    ],
  }),
);

export default WrapperComponent => connect(mapStateToProps)(WrapperComponent);
