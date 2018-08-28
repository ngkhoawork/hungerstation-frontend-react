import React from 'react';
import PropTypes from 'prop-types';

import Paragraph from 'components/Paragraph';
import StyledCategory from './StyledCategory';
import StyledTitle from './StyledTitle';
import Indicator from '../Indicator';

const Category = ({ title, children }) => (
  <StyledCategory>
    <StyledTitle>
      <Paragraph size="big">{title}</Paragraph>
      <Indicator value={1} />
    </StyledTitle>
    {children}
  </StyledCategory>
);

Category.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

export default Category;
