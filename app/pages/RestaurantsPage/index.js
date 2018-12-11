import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resetState } from 'modules/restaurants/actions';
import RestaurantsPage from './component';

class RestaurantsPageHOC extends React.Component {
  componentWillUnmount() {
    this.props.resetState();
  }

  render() {
    return <RestaurantsPage {...this.props} />;
  }
}

RestaurantsPageHOC.propTypes = {
  resetState: PropTypes.func.isRequired,
};

export default connect(
  null,
  { resetState },
)(RestaurantsPageHOC);
