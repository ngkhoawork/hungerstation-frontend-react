import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Title } from 'components/Typography';

const titleStyle = {
  fontSize: 20,
  letterSpacing: 0.28,
  margin: '20px 0',
};

const PaymentSection = ({ title, children }) => (
  <div>
    <Title style={titleStyle}>{title}</Title>
    <div>{children}</div>
  </div>
);

PaymentSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};

export default PaymentSection;
