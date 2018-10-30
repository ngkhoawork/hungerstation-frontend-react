import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'app.components.CheckoutPage.IneligibleAddress.title',
    defaultMessage: 'This reastaurant is not available in your area',
  },
  description: {
    id: 'app.components.CheckoutPage.IneligibleAddress.description',
    defaultMessage: `Sorry this restaurant does not ship to this address.
      Try to change location or restaurant.`,
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
