import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/Icon';
import intl from 'utils/intlService';
import { flex, sideMargin, rotateArrowIcon } from 'utils/css/styles';
import { fuscousGray } from 'utils/css/colors';
import { fontFamilyRegular } from 'utils/css/variables';
import { StyledLink } from 'utils/css/styledComponents';
import messages from './messages';

const StyledBack = styled.div`
  ${flex({ align: 'center', justify: 'center' })};
  display: inline-flex;
  color: ${fuscousGray};
  cursor: pointer;
  font-family: ${fontFamilyRegular};
  line-height: 1;
`;

const Label = styled.div`
  ${sideMargin('start', '5px')};
`;

const IconContainer = styled.div`
  ${rotateArrowIcon()};
`;

const Back = ({ onClick, to, label }) => {
  const renderContent = () => (
    <StyledBack onClick={onClick}>
      <IconContainer>
        <Icon name="arrow-back" size={16} />
      </IconContainer>
      <Label>{label || intl.formatMessage(messages.text)}</Label>
    </StyledBack>
  );

  if (to) return <StyledLink to={to}>{renderContent()}</StyledLink>;

  return renderContent();
};

Back.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

export default Back;
