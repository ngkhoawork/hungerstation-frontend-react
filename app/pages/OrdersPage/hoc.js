import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchOrders } from 'modules/orders/actions';
import OrdersPage from './component';
import { selectOrdersState } from '../../modules/orders/selectors';

class OrdersPageHOC extends React.Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    const {
      ordersState: { orders, selectedOrder, isLoading },
      match: { path },
    } = this.props;

    return (
      <OrdersPage
        isLoading={isLoading || isLoading === undefined}
        orders={orders}
        selectedOrder={selectedOrder}
        path={path}
      />
    );
  }
}

OrdersPageHOC.propTypes = {
  fetchOrders: PropTypes.func.isRequired,
  ordersState: PropTypes.object.isRequired,
  match: PropTypes.object,
};

export default connect(
  state => ({
    ordersState: selectOrdersState(state),
  }),
  { fetchOrders },
)(OrdersPageHOC);
