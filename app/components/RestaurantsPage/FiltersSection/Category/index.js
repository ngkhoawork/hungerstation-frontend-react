import React from 'react';
import PropTypes from 'prop-types';
import { jade } from 'utils/colors';

import Paragraph from 'components/Paragraph';
import CircledItem from 'components/CircledItem';
import StyledCategory from './StyledCategory';
import StyledTitle from './StyledTitle';

const Category = ({ title, children }) => (
  <StyledCategory>
    <StyledTitle>
      <Paragraph size={17}>{title}</Paragraph>
      <CircledItem width={15} color={jade}>
        <Paragraph color="white" size={12}>
          1
        </Paragraph>
      </CircledItem>
    </StyledTitle>
    {children}
  </StyledCategory>
);

Category.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Category;
