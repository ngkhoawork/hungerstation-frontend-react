import React from 'react';
import PropTypes from 'prop-types';
import { jade } from 'utils/colors';

import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';
import CircledItem from 'components/CircledItem';
import Group from 'components/Group';
import StyledCategory from './StyledCategory';
import StyledTitle from './StyledTitle';
import IconWrapper from './IconWrapper';

const Category = ({ title, children, isSectionExpanded, toggleSection }) => (
  <StyledCategory>
    <StyledTitle>
      <Group>
        <Paragraph size={17} margin="0 5px 0 0">
          {title}
        </Paragraph>
        <CircledItem width={15} color={jade}>
          <Paragraph color="white" size={12}>
            1
          </Paragraph>
        </CircledItem>
      </Group>
      <IconWrapper
        isSectionExpanded={isSectionExpanded}
        onClick={toggleSection}
      >
        <Icon name="arrow-circled" size={12} />
      </IconWrapper>
    </StyledTitle>
    {isSectionExpanded && children}
  </StyledCategory>
);

Category.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isSectionExpanded: PropTypes.bool.isRequired,
  toggleSection: PropTypes.func,
};

Category.defaultProps = {
  toggleSection: () => {},
};

export default Category;
