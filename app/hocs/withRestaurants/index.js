import { lifecycle, compose } from 'recompose';
import { connect } from 'react-redux';
import { fetchRestaurantsAction } from 'modules/restaurants/actions';

const mapDispatchToProps = {
  fetchRestaurantsAction,
};

const life = lifecycle({
  componentDidMount() {
    const { history, match, fetchRestaurantsAction } = this.props;

    if (history.action === 'POP') {
      fetchRestaurantsAction({
        districtSlug: match.params.district,
        citySlug: match.params.city,
        deliveryType: match.params.deliveryType,
      });
    }
  },
});

// TODO add recompose branch + restaurants selector
const enchanced = compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  life,
);

export default Component => enchanced(Component);
