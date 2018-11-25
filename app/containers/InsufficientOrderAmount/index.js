import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { getDeepProp } from 'utils/helpers';
import { selectRestaurantState } from 'modules/restaurant/selectors';
import InsufficientOrderAmount from 'components/InsufficientOrderAmount';
import { hideModal } from 'containers/ModalContainer/actions';

const InsufficientOrderAmountHOC = ({ history, location, ...props }) => {
  const handleAddMore = () => {
    const path = location.pathname.split('/');
    path.pop(); // remove /checkout from pathname
    history.push(path.join('/'));
    hideModal();
  };

  const minAmount = getDeepProp(props.restaurant, [
    'delivery_conditions',
    0,
    'minimum_order',
  ]);

  return (
    <InsufficientOrderAmount
      minAmount={minAmount}
      onCancel={props.hideModal}
      onAddMore={handleAddMore}
    />
  );
};

InsufficientOrderAmountHOC.propTypes = {
  restaurant: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default compose(
  withRouter,
  connect(
    state => ({
      restaurant: selectRestaurantState(state).restaurant,
    }),
    { hideModal },
  ),
)(InsufficientOrderAmountHOC);
