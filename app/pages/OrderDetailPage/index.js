import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { fetchOrders } from 'modules/orders/actions';
import { find } from 'lodash';
import OrderDetailPage from './component';
import { selectOrdersState } from '../../modules/orders/selectors';
import NotFound from './NotFound';

class OrderDetailPageHOC extends React.Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  handleClickBack = () => {
    this.props.history.pop();
  };

  render() {
    const {
      ordersState: { orders },
      match: {
        params: { orderId },
        path,
      },
    } = this.props;

    const selectedOrder = find(orders, ['id', orderId]);

    if (selectedOrder) {
      return <OrderDetailPage order={selectedOrder} path={path} />;
    }

    return <NotFound onClickBack={this.handleClickBack} />;
  }
}

OrderDetailPageHOC.propTypes = {
  fetchOrders: PropTypes.func.isRequired,
  ordersState: PropTypes.object.isRequired,
  match: PropTypes.object,
  history: PropTypes.object,
};

export default compose(
  withRouter,
  connect(
    state => ({
      ordersState: selectOrdersState(state),
    }),
    { fetchOrders },
  ),
)(OrderDetailPageHOC);
