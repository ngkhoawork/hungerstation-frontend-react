import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import intl from 'utils/intlService';
import { addressTypesObj, otherAddressType } from 'modules/address/constants';
import addressMessages from 'modules/address/messages';
import { flex, mediaMedium, sideMargin } from 'utils/css/styles';
import { fuscousGray, alabaster } from 'utils/css/colors';
import {
  addressIndent,
  fontFamilyRegular,
  fontFamilyLight,
  borderRadius,
  boxShadow,
} from 'utils/css/variables';
import { StatusContent } from 'utils/css/styledComponents';
import Button from 'components/Button';
import Icon from 'components/Icon';
import CheckboxIcon from 'components/CheckboxIcon';
import CircledItem from 'components/CircledItem';
import messages from './messages';

const getName = ({ name, specific_type, street, building_number }) => {
  if (specific_type && specific_type !== otherAddressType) {
    return intl.formatMessage(addressMessages[specific_type]);
  }

  return (
    name ||
    `${street || ''} ${building_number || ''}`.trim() ||
    intl.formatMessage(addressMessages.old_style)
  );
};

const Address = ({
  address,
  isSelected,
  isWithBorder,
  onSelectToggle,
  onEditClick,
}) => {
  const isEligible = address.branch_eligibility;
  const handleEditBtnClick = event => {
    event.stopPropagation();
    onEditClick(address);
  };

  return (
    <Container
      onClick={() => isEligible && onSelectToggle && onSelectToggle(address)}
      isWithBorder={isWithBorder}
    >
      <LeftSide>
        <CheckboxIcon isChecked={isSelected} isDisabled={!isEligible} />
      </LeftSide>
      <Content isEligible={isEligible}>
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
          {isEligible ? null : (
            <StatusContent color="error">
              {`• ${intl.formatMessage(messages.outOfRange)}`}
            </StatusContent>
          )}
        </Name>
        <Location>{address.description || ''}</Location>
      </Content>
      <Button
        primary={false}
        color={alabaster}
        lift={false}
        inline
        size="l"
        css={editBtnCss}
        onClick={handleEditBtnClick}
      >
        <React.Fragment>
          <EditBtnLabel>
            {intl.formatMessage(messages.edit)} &nbsp;
          </EditBtnLabel>
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
  height: 60px;
  ${flex({ shrink: 0 }, false)};

  ${mediaMedium`
    width: auto;
    padding: 20px;
  `};
`;

const Content = styled.div`
  ${flex({ direction: 'column', grow: 1 })};
  font-size: 16px;
  line-height: 1;
  color: ${fuscousGray};
  ${sideMargin('end', '10px')};

  ${({ isEligible }) => !isEligible && `opacity: 0.5;`};
`;

const Name = styled.div`
  position: relative;
  ${flex({ align: 'center' })};
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
  marginLeft: 5,
  // position: 'absolute',
  // right: 0,
  // top: 0,
};

const editBtnCss = css`
  white-space: nowrap;

  ${mediaMedium`padding: 10px 3px 10px 10px;`};
`;

const Title = styled.span`
  font-family: ${fontFamilyRegular};
`;

const Location = styled.div`
  font-family: ${fontFamilyLight};
`;

const EditBtnLabel = styled.span`
  ${mediaMedium`display: none;`};
`;
