import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { borderRadius } from 'utils/css/variables';
import {
  persimmon,
  errorBg,
  jade,
  successBg,
  fuscousGray,
  alabaster,
} from 'utils/css/colors';
import { flex, sideMargin } from 'utils/css/styles';
import Icon from 'components/Icon';

const bgColor = {
  error: errorBg,
  success: successBg,
  default: alabaster,
};

const color = {
  error: persimmon,
  success: jade,
  default: fuscousGray,
};

const Container = styled.div`
  border-radius: ${borderRadius};
  background-color: ${({ type }) => bgColor[type] || bgColor.default};
  padding: ${({ size }) => (size === 's' ? 10 : 20)}px;
  ${flex({ justify: 'center', align: 'flex-start' })};

  ${({ style }) => style && css(style)};
`;
const Message = styled.div`
  color: ${({ type }) => color[type] || color.default};
  font-size: 14px;
  line-height: 1;
  ${sideMargin('start', '10px')};
`;

const Notice = ({ message, type, size, ...props }) => (
  <Container type={type} size={size} {...props}>
    <Icon name={`info-${type}`} size={20} />
    <Message type={type}>{message}</Message>
  </Container>
);

Notice.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'default']),
  size: PropTypes.oneOf(['s']),
};

Notice.defaultProps = {
  type: 'default',
};

export default Notice;
