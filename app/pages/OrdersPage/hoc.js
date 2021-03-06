import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { fetchOrders } from 'modules/orders/actions';
import OrdersPage from './component';
import { selectOrdersState } from '../../modules/orders/selectors';

class OrdersPageHOC extends React.Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    const {
      ordersState: { orders, isLoading },
      match: { path },
      history,
    } = this.props;

    return (
      <OrdersPage
        isLoading={isLoading || isLoading === undefined}
        orders={orders}
        path={path}
        history={history}
      />
    );
  }
}

OrdersPageHOC.propTypes = {
  fetchOrders: PropTypes.func.isRequired,
  ordersState: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object,
};

export default compose(
  withRouter,
  connect(
    state => ({
      ordersState: selectOrdersState(state),
    }),
    { fetchOrders },
  ),
)(OrdersPageHOC);
