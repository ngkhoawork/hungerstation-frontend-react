import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'app.components.CheckoutPage.IneligibleAddress.title',
    defaultMessage: 'This reastaurant is not available in your area',
  },
  description: {
    id: 'app.components.CheckoutPage.IneligibleAddress.description',
    defaultMessage: `Sorry, Selected address is not eligible for delivery by the restaurant.
      Please change your address or choose a different restaurant.`,
  },
  edit: {
    id: 'app.components.CheckoutPage.IneligibleAddress.edit',
    defaultMessage: 'Edit address',
  },
  search: {
    id: 'app.components.CheckoutPage.IneligibleAddress.search',
    defaultMessage: 'Search in your area',
  },
});
