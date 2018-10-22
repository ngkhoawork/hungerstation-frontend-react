import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Back from './component';

const BackHOC = ({ history }) => <Back onClick={history.goBack} />;

BackHOC.propTypes = {
  history: PropTypes.object.isRequired,
};

export { Back as component };

export default withRouter(BackHOC);
