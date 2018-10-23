/*
 * RestaurantsHeader Messages
 *
 * This contains all the text for the RestaurantsHeader component.
 */

import { defineMessages } from 'react-intl';

export default defineMessages({
  text: {
    id: 'app.components.RestaurantsList.NotFound.text',
    defaultMessage: 'No restaurants found!',
  },
  description: {
    id: 'app.components.RestaurantsList.NotFound.description',
    defaultMessage:
      "Sorry, we couldn't find any restaurants nearby as we don't deliver to this area yet",
  },
});
