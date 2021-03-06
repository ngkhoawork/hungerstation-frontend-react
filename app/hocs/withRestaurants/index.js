import { lifecycle, compose } from 'recompose';
import { connect } from 'react-redux';
import { fetchRestaurantsAction } from 'modules/restaurants/actions';

const mapDispatchToProps = {
  fetchRestaurantsAction,
};

const life = lifecycle({
  componentDidMount() {
    const { match, fetchRestaurantsAction } = this.props;

    fetchRestaurantsAction({
      city: match.params.city,
      district: match.params.district,
      deliveryType: match.params.deliveryType,
    });
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
