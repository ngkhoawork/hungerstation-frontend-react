import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Back from 'components/Back';

const BackHOC = ({ history }) => <Back onClick={history.goBack} />;

BackHOC.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(BackHOC);
