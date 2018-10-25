import React from 'react';
import { func, bool } from 'prop-types';
import { connect } from 'react-redux';

import { silverChalice } from 'utils/css/colors';
import intl from 'utils/intlService';
import { resetCuisinesAction } from 'modules/restaurants/actions';

import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';
// import CircledItem from 'components/CircledItem';
import Group from 'components/Group';
import { StyledItem } from '../Styled';
// import { StyledIconImage } from './Styled';
import messages from './messages';

const AllCuisinesItem = ({ isSelected, resetCuisinesAction }) => (
  <StyledItem selected={isSelected} onClick={() => resetCuisinesAction()}>
    <Group>
      {/* <CircledItem color={wildSand} width={28}>
        <StyledIconImage alt="x" />
      </CircledItem> */}
      <Paragraph
        color={isSelected ? 'black' : silverChalice}
        margin="0 0 -3px 10px"
      >
        {intl.formatMessage(messages.allCuisines)}
      </Paragraph>
    </Group>
    {isSelected && <Icon name="check" />}
  </StyledItem>
);

AllCuisinesItem.propTypes = {
  isSelected: bool,
  resetCuisinesAction: func,
};

export default connect(
  null,
  { resetCuisinesAction },
)(AllCuisinesItem);
