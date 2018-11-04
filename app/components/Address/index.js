import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import intl from 'utils/intlService';
import { addressTypesObj, otherAddressType } from 'modules/address/constants';
import addressMessages from 'modules/address/messages';
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

const getName = ({ name, specific_type, street, building_number }) => {
  if (specific_type && specific_type !== otherAddressType) {
    return intl.formatMessage(addressMessages[specific_type]);
  }

  return name || `${street} ${building_number || ''}`.trim();
};

const getDescription = ({
  specific_type,
  description,
  street,
  building_number,
  name,
}) => {
  const address = `${street} ${building_number || ''}`.trim();

  if (specific_type) return address;

  return name ? address : description;
};

const Address = ({
  address,
  isSelected,
  isWithBorder,
  onSelectToggle,
  onEditClick,
}) => {
  const handleEditBtnClick = event => {
    event.stopPropagation();
    onEditClick(address);
  };

  return (
    <Container
      onClick={() => onSelectToggle && onSelectToggle(address)}
      isWithBorder={isWithBorder}
    >
      <LeftSide>
        <CheckboxIcon isChecked={isSelected} />
      </LeftSide>
      <Content>
        <Name>
          <Title>{getName(address)}</Title>
          <CircledItem
            color={alabaster}
            inline
            width={28}
            style={typeIconStyle}
          >
            <Icon
              name={
                address.specific_type
                  ? addressTypesObj[address.specific_type].icon
                  : 'district-v2'
              }
              size={16}
            />
          </CircledItem>
        </Name>
        <Location>{getDescription(address)}</Location>
      </Content>
      <Button
        primary={false}
        color={alabaster}
        lift={false}
        inline
        size="l"
        style={{ whiteSpace: 'nowrap' }}
        onClick={handleEditBtnClick}
      >
        <React.Fragment>
          {intl.formatMessage(messages.edit)} &nbsp;
          <Icon name="edit" size={16} />
        </React.Fragment>
      </Button>
    </Container>
  );
};

Address.propTypes = {
  address: PropTypes.object.isRequired,
  isSelected: PropTypes.bool,
  isWithBorder: PropTypes.bool,
  onSelectToggle: PropTypes.func,
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
  ${flex({ shrink: 0 }, false)};
`;

const Content = styled.div`
  ${flex({ direction: 'column', grow: 1 })};
  font-size: 16px;
  line-height: 1;
  color: ${fuscousGray};
  margin-right: 10px;
`;

const Name = styled.div`
  position: relative;
`;

// const Name = styled.div`
//   position: relative;
//   padding-right: 30px;
//   line-height: 27px;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
// `;

const typeIconStyle = {
  // position: 'absolute',
  // right: 0,
  // top: 0,
};

const Title = styled.span`
  font-family: ${fontFamilyRegular};
`;

const Location = styled.div`
  font-family: ${fontFamilyLight};
`;
