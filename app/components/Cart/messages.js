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
  errorBoxMessage: {
    id: 'app.components.Cart.minOrderError',
    defaultMessage:
      '{restaurantName} minimum order amount SR {minAmount}. current order total is SR {currentAmount}.',
  },
  amount: {
    id: 'app.components.Cart.amount',
    defaultMessage: 'Order Amount',
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
  viewCart: {
    id: 'app.components.Cart.viewCart',
    defaultMessage: 'View Cart',
  },
  placeOrder: {
    id: 'app.components.Cart.placeOrder',
    defaultMessage: 'Place order',
  },
});
