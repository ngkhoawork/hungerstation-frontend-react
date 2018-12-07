import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showModal } from 'containers/ModalContainer/actions';
import Offer from 'components/Offer';

const OfferHOC = props => <Offer {...props} />;

OfferHOC.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default connect(
  null,
  { showModal },
)(OfferHOC);
