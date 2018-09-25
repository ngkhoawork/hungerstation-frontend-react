import React from 'react';
import PropTypes from 'prop-types';
import { gold } from 'utils/css/colors';

import Paragraph from 'components/Paragraph';
import CircledItem from 'components/CircledItem';
import Icon from 'components/Icon';
import Group from 'components/Group';

import StyledHeader from './StyledHeader';
import ButtonWrapper from './ButtonWrapper';
import GroupWrapper from './GroupWrapper';

const Header = ({ isModalOpened, closeModal }) => (
  <StyledHeader>
    <Paragraph size={22}>Filters</Paragraph>
    <GroupWrapper isModalOpened={isModalOpened}>
      <Group>
        <Paragraph size={12} margin="0 5px 0 0">
          Clear All
        </Paragraph>
        <Icon name="delete" />
      </Group>
    </GroupWrapper>
    <ButtonWrapper isModalOpened={isModalOpened} onClick={closeModal}>
      <CircledItem color={gold} width={28}>
        <Icon name="close" size={8} />
      </CircledItem>
    </ButtonWrapper>
  </StyledHeader>
);

Header.propTypes = {
  isModalOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func,
};

Header.defaultProps = {
  closeModal: () => {},
};

export default Header;
