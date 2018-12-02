import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { flex } from 'utils/css/styles';
import {
  zIndexLoader,
  headerHeight,
  navHeaderHeight,
} from 'utils/css/variables';
import animationData from './data.json';

const Container = styled.div`
  ${flex({ justify: 'center', align: 'center' })};
  transform: translateZ(0);
  z-index: ${zIndexLoader};
  position: absolute;
  width: 100%;

  ${({ isFullHeight }) => isFullHeight && `height: 100%`};
  ${({ isFullPageHeight }) =>
    isFullPageHeight &&
    `height: calc(100vh - ${headerHeight} - ${navHeaderHeight})`};

  > svg {
    width: 180px !important;
    height: 180px !important;
  }

  ${({ style }) => style && css(style)};
  ${({ css }) => css};
`;

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.loaderRef = React.createRef();
  }

  componentDidMount() {
    this.loaderAnimation = window.lottie.loadAnimation({
      container: this.loaderRef.current,
      animationData,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });
  }

  componentWillUnmount() {
    this.loaderAnimation.destroy();
  }

  render() {
    return <Container {...this.props} innerRef={this.loaderRef} />;
  }
}

Loader.propTypes = {
  isFullHeight: PropTypes.bool,
};

export default Loader;
