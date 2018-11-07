import { defineMessages } from 'react-intl';

export default defineMessages({
  status: {
    busy: {
      id: 'app.components.RestaurantHeader.status.busy',
      defaultMessage: 'Busy',
    },
    closed: {
      id: 'app.components.RestaurantHeader.status.closed',
      defaultMessage: 'Closed',
    },
    soon: {
      id: 'app.components.RestaurantHeader.status.soon',
      defaultMessage: 'Opens at {time}',
    },
    ready: {
      id: 'app.components.RestaurantHeader.status.ready',
      defaultMessage: 'Open till {time}',
    },
  },
});
