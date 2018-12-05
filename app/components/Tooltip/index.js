import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { borderRadius, boxShadowLight } from 'utils/css/variables';

const Container = styled.div`
  position: absolute;
  background: white;
  border-radius: ${borderRadius};
  padding: 20px;
  box-shadow: ${boxShadowLight};

  ${({ style }) => style && css(style)};
  ${({ css }) => css};
`;

const Tip = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  background: white;
  transform: rotateZ(45deg);
  right: 20px;
  top: -10px;
`;

const Tooltip = ({ children, ...props }) => (
  <Container {...props}>
    <Tip />
    {children}
  </Container>
);

Tooltip.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};

export default Tooltip;
