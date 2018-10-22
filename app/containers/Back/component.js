import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/Icon';
import intl from 'utils/intlService';
import { flex } from 'utils/css/styles';
import { fuscousGray } from 'utils/css/colors';
import messages from './messages';

const StyledBack = styled.div`
  ${flex({ align: 'center', justify: 'center' })};
  display: inline-flex;
  color: ${fuscousGray};
  cursor: pointer;
`;

const Label = styled.div`
  margin-left: 5px;
  padding-top: 3px;
`;

const Back = ({ onClick }) => (
  <StyledBack onClick={onClick}>
    <Icon name="arrow-back" size={16} />
    <Label>{intl.formatMessage(messages.text)}</Label>
  </StyledBack>
);

Back.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Back;
