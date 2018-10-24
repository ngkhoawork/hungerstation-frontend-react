import React from 'react';
import { func, bool } from 'prop-types';
import { connect } from 'react-redux';

import { silverChalice } from 'utils/css/colors';
import intl from 'utils/intlService';
import { resetCusinesAction } from 'modules/restaurants/actions';

import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';
// import CircledItem from 'components/CircledItem';
import Group from 'components/Group';
import { StyledItem } from '../Styled';
// import { StyledIconImage } from './Styled';
import messages from './messages';

const AllCussinesItem = ({ isSelected, resetCusinesAction }) => (
  <StyledItem selected={isSelected} onClick={() => resetCusinesAction()}>
    <Group>
      {/* <CircledItem color={wildSand} width={28}>
        <StyledIconImage alt="x" />
      </CircledItem> */}
      <Paragraph
        color={isSelected ? 'black' : silverChalice}
        margin="0 0 -3px 10px"
      >
        {intl.formatMessage(messages.allCusines)}
      </Paragraph>
    </Group>
    {isSelected && <Icon name="check" />}
  </StyledItem>
);

AllCussinesItem.propTypes = {
  isSelected: bool,
  resetCusinesAction: func,
};

export default connect(
  null,
  { resetCusinesAction },
)(AllCussinesItem);
