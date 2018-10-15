import { connect } from 'react-redux';
import RestaurantsHeader from 'pages/RestaurantsPage/RestaurantsSection/RestaurantsHeader';

import { selectVisibleRestaurants } from 'modules/restaurants/selectors';

const enhanced = connect(state => ({
  itemsFound: selectVisibleRestaurants(state).length,
}));

export default enhanced(RestaurantsHeader);
