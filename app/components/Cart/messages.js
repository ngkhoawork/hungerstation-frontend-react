import { defineMessages } from 'react-intl';

export default defineMessages({
  yourOrder: {
    id: 'app.components.Cart.yourOrder',
    defaultMessage: 'Your Order',
  },
  yourOrderFrom: {
    id: 'app.components.Cart.yourOrderFrom',
    defaultMessage: 'Your order from',
  },
  deliveryTo: {
    id: 'app.components.Cart.deliveryTo',
    defaultMessage: 'Delivery to',
  },
  minOrderError: {
    id: 'app.components.Cart.minOrderError',
    defaultMessage:
      '{restaurantName} minimum order amount is {minAmount}. Current order total is {orderAmount}.',
  },
  amount: {
    id: 'app.components.Cart.amount',
    defaultMessage: 'Order Amount',
  },
  selectDelivery: {
    id: 'app.components.Cart.selectDelivery',
    defaultMessage: 'Select a delivery option',
  },
  deliveryFee: {
    id: 'app.components.Cart.deliveryFee',
    defaultMessage: 'Delivery fee',
  },
  discount: {
    id: 'app.components.Cart.discount',
    defaultMessage: 'Discount',
  },
  total: {
    id: 'app.components.Cart.total',
    defaultMessage: 'Total',
  },
  vat: {
    id: 'app.components.Cart.vat',
    defaultMessage: 'All prices are {percent}% VAT inclusive',
  },
  agreement: {
    id: 'app.components.Cart.agreement',
    defaultMessage: 'By making this purchase you agree to our ',
  },
  terms: {
    id: 'app.components.Cart.terms',
    defaultMessage: 'Terms and Conditions',
  },
  and: {
    id: 'app.components.Cart.and',
    defaultMessage: ' and ',
  },
  privacyPolicy: {
    id: 'app.components.Cart.privacyPolicy',
    defaultMessage: 'Privacy Policy',
  },
});
