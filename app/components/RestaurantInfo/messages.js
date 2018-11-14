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
    tomorrow: {
      id: 'app.components.RestaurantHeader.status.tomorrow',
      defaultMessage: 'Opens at {time}',
    },
    soon: {
      id: 'app.components.RestaurantHeader.status.soon',
      defaultMessage: 'Opens on {day} at {time}',
    },
    ready: {
      id: 'app.components.RestaurantHeader.status.ready',
      defaultMessage: 'Open till {time}',
    },
  },
});
