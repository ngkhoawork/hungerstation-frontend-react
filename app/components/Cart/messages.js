import { defineMessages } from 'react-intl';

export default defineMessages({
  yourOrder: {
    id: 'app.components.Cart.yourOrder',
    defaultMessage: 'Your Order',
  },
  deliveryTo: {
    id: 'app.components.Cart.DeliveryTo.deliveryTo',
    defaultMessage: 'Delivery to',
  },
  errorBoxMessage: {
    id: 'app.components.Cart.MinOrderErrBox.errorBoxMessage',
    defaultMessage:
      '{restaurantName} minimum order amount SR {minAmount}. current order total is SR {currentAmount}.',
  },
  amount: {
    id: 'app.components.Cart.Amount.amount',
    defaultMessage: 'Order Amount',
  },
  totalAmount: {
    id: 'app.components.Cart.Amount.totalAmount',
    defaultMessage: 'Total',
  },
  buttonLabel: {
    id: 'app.components.Cart.Amount.buttonLabel',
    defaultMessage: 'View Cart',
  },
});
