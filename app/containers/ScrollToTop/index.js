import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends React.Component {
  componentDidMount() {
    // TODO: find the solution for cities fetching in footer that affect scroll
    setTimeout(() => window.scrollTo(0, 0), 0);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      setTimeout(() => window.scrollTo(0, 0), 0);
    }
  }

  render() {
    return null;
  }
}

ScrollToTop.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(ScrollToTop);
