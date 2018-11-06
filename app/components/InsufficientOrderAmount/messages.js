import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'app.components.InsufficientOrderAmount.title',
    defaultMessage: 'Order amount under required',
  },
  message: {
    id: 'app.components.InsufficientOrderAmount.message',
    defaultMessage: `Your order amount is below required by the Restaurant.
      Please add more items from Restaurant Menu.`,
  },
  cancel: {
    id: 'app.components.InsufficientOrderAmount.cancel',
    defaultMessage: 'Cancel',
  },
  addMore: {
    id: 'app.components.InsufficientOrderAmount.addMore',
    defaultMessage: 'Add more items',
  },
});
