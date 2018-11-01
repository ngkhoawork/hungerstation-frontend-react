import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { borderRadius } from 'utils/css/variables';
import {
  persimmon,
  errorBg,
  jade,
  successBg,
  fuscousGray,
  alabaster,
} from 'utils/css/colors';
import { flex } from 'utils/css/styles';
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
  padding: 20px;
  ${flex({ justify: 'center', align: 'flex-start' })};
`;
const Message = styled.div`
  color: ${({ type }) => color[type] || color.default};
  font-size: 14px;
  line-height: 1;
  margin-left: 10px;
`;

const Notice = ({ message, type }) => (
  <Container type={type}>
    <Icon name={`info-${type}`} size={20} />
    <Message type={type}>{message}</Message>
  </Container>
);

Notice.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'default']),
};

Notice.defaultProps = {
  type: 'default',
};

export default Notice;
