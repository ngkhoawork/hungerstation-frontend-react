import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import intl from 'utils/intlService';
import { flex } from 'utils/css/styles';
import { fuscousGray, alabaster } from 'utils/css/colors';
import {
  addressIndent,
  fontFamilyRegular,
  fontFamilyLight,
  borderRadius,
  boxShadow,
} from 'utils/css/variables';
import Button from 'components/Button';
import Icon from 'components/Icon';
import CheckboxIcon from 'components/CheckboxIcon';
import CircledItem from 'components/CircledItem';
import messages from './messages';
import { addressTypesObj } from './constants';

const Address = ({
  address,
  isSelected,
  isWithBorder,
  onSelectToggle,
  onEditClick,
}) => (
  <Container onClick={onSelectToggle} isWithBorder={isWithBorder}>
    <LeftSide>
      <CheckboxIcon isChecked={isSelected} />
    </LeftSide>
    <Content>
      <div>
        <Title>{intl.formatMessage(messages[address.type])}</Title> &nbsp;
        <CircledItem color={alabaster} inline width={28}>
          <Icon name={addressTypesObj[address.type].icon} size={16} />
        </CircledItem>
      </div>
      <Location>{address.address}</Location>
    </Content>
    <Button
      primary={false}
      color={alabaster}
      lift={false}
      inline
      size="l"
      onClick={onEditClick}
    >
      <React.Fragment>
        {intl.formatMessage(messages.edit)} &nbsp;
        <Icon name="edit" size={16} />
      </React.Fragment>
    </Button>
  </Container>
);

Address.propTypes = {
  address: PropTypes.shape({
    type: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
  isSelected: PropTypes.bool,
  isWithBorder: PropTypes.bool,
  onSelectToggle: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
};

export default Address;

const Container = styled.div`
  ${flex({ align: 'center' })};
  padding: 20px 20px 20px 0;
  border-radius: ${borderRadius};
  margin-bottom: ${({ isWithBorder }) => (isWithBorder ? 20 : 0)}px;
  box-shadow: ${({ isWithBorder }) => (isWithBorder ? boxShadow : 'none')};
`;

const LeftSide = styled.div`
  width: ${addressIndent};
  padding: 20px 20px 20px 40px;
  flex-shrink: 0;
`;

const Content = styled.div`
  ${flex({ direction: 'column' })};
  font-size: 16px;
  line-height: 1;
  color: ${fuscousGray};
  flex-grow: 1;
`;

const Title = styled.span`
  font-family: ${fontFamilyRegular};
`;

const Location = styled.div`
  font-family: ${fontFamilyLight};
`;
