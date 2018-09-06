import React from 'react';

import filtersCategoryPropTypes from 'props/filters';

import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';
import StyledAction from '../FiltersSection/Cuisines/StyledAction';
import StyledMobileFiltersSection from './StyledMobileFiltersSection';
import Header from '../FiltersSection/Header';
import Category from '../FiltersSection/Category';
import Tags from '../FiltersSection/Tags';

const MobileFiltersSection = ({ tags }) => (
  <StyledMobileFiltersSection>
    <Header />
    <Category title="Tags">
      <Tags tags={tags} />
    </Category>
    <StyledAction>
      <Paragraph>More Filters</Paragraph>
      <Icon name="arrow-circled" size={13} />
    </StyledAction>
  </StyledMobileFiltersSection>
);

MobileFiltersSection.propTypes = {
  tags: filtersCategoryPropTypes,
};

export default MobileFiltersSection;
