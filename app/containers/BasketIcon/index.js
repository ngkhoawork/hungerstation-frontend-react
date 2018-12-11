import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { forwardTo } from 'utils/route';
import { getStorageItem } from 'utils/localStorage';
import { selectDistrict, selectCity } from 'modules/location/selectors';
import { initCart } from 'containers/CartContainer/actions';
import { selectCartPurchases } from 'containers/CartContainer/selectors';
import BasketIcon from 'components/BasketIcon';

class BasketIconHOC extends React.Component {
  componentDidMount() {
    this.props.initCart();
  }

  handleBasketClick = () => {
    const branchId = getStorageItem('branchId');
    const city = getStorageItem('city');
    const district = getStorageItem('district');

    if (this.props.purchases.length && branchId) {
      let url = `/restaurant/${branchId}`;

      if (city && district) url = `/restaurants/${city}/${district}${url}`;

      forwardTo(url);
    }
  };

  render() {
    const { purchases, ...props } = this.props;

    return (
      <BasketIcon
        {...props}
        isDisabled={!purchases.length}
        onClick={this.handleBasketClick}
      />
    );
  }
}

BasketIconHOC.propTypes = {
  purchases: PropTypes.array.isRequired,
  initCart: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    purchases: selectCartPurchases(state),
    city: selectCity(state),
    district: selectDistrict(state),
  }),
  { initCart },
)(BasketIconHOC);
