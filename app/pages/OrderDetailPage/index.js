import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { fetchOrders } from 'modules/orders/actions';
import { fetchAddresses } from 'modules/address/actions';
import { setBranchId, fetchRestaurant } from 'modules/restaurant/actions';
import {
  selectCityAction,
  selectDistrictAction,
} from 'modules/location/actions';
import { selectOrdersState } from 'modules/orders/selectors';
import { find } from 'lodash';
import OrderDetailPage from './component';

class OrderDetailPageHOC extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: null,
      params: null,
      path: null,
      showThankyouMsg: false,
    };

    if (props.ordersState.orders.length === 0) {
      this.props.fetchOrders();
    }
  }

  static getDerivedStateFromProps(props, state) {
    const {
      ordersState: { orders },
      match: {
        params: { orderId },
        path,
      },
      location: { state: historyState },
    } = props;

    if (state.order === null && orders.length > 0) {
      const order = find(orders, ['id', orderId]);
      if (order) {
        const params = {
          branchId: order.branchId,
          city: order.city.name,
          district: order.district.name,
        };
        const showThankyouMsg = historyState
          ? historyState.showThankyouMsg
          : false;
        props.setBranchId(params.branchId);
        props.fetchRestaurant(params);
        props.fetchAddresses(params.branchId);
        props.selectCity(order.city);
        props.selectDistrict({
          id: order.district.id,
          name: order.district.name,
        });

        return {
          order,
          params,
          path,
          showThankyouMsg,
        };
      }
    }
    return null;
  }

  handleClickBack = () => {
    this.props.history.pop();
  };

  render() {
    return <OrderDetailPage {...this.state} />;
  }
}

OrderDetailPageHOC.propTypes = {
  fetchOrders: PropTypes.func.isRequired,
  ordersState: PropTypes.object.isRequired,
  history: PropTypes.object,
};

export default compose(
  withRouter,
  connect(
    state => ({
      ordersState: selectOrdersState(state),
    }),
    {
      setBranchId,
      fetchAddresses,
      fetchOrders,
      fetchRestaurant,
      selectCity: selectCityAction,
      selectDistrict: selectDistrictAction,
    },
  ),
)(OrderDetailPageHOC);
