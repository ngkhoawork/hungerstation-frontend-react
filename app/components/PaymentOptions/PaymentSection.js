import React from 'react';
import PropTypes from 'prop-types';
import { Title } from 'components/Typography';

const titleStyle = {
  fontSize: 20,
  letterSpacing: 0.28,
  margin: '0',
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
