import { defineMessages } from 'react-intl';

export default defineMessages({
  required: {
    id: 'app.components.DeliveryOptions.required',
    defaultMessage: `Info: Please pick one delivery option.
      You need to chose a delivery option before placing your order.`,
  },
  disabled: {
    id: 'app.components.DeliveryOptions.disabled',
    defaultMessage:
      'Info: At this moment {name} is unavailable for this restaurant',
  },
});
