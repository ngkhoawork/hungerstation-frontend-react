import React from 'react';
import PropTypes from 'prop-types';
import { filtersCategoryPropTypes } from 'props/filters';

import Group from 'components/Group';
import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';

import Header from '../FiltersSection/Header';
import Category from '../FiltersSection/Category';
import Tags from '../FiltersSection/Tags';

const BriefFiltersSection = ({ isModalOpened, tags, openModal }) => (
  <React.Fragment>
    <Header isModalOpened={isModalOpened} />
    <Category title="Tags" isSectionExpanded={tags.get('isExpanded')}>
      <Tags tags={tags} />
    </Category>
    <Group onClick={openModal}>
      <Paragraph margin="0 5px 0 0">More Filters</Paragraph>
      <Icon name="arrow-circled" size={13} />
    </Group>
  </React.Fragment>
);

BriefFiltersSection.propTypes = {
  isModalOpened: PropTypes.bool.isRequired,
  tags: filtersCategoryPropTypes,
  openModal: PropTypes.func.isRequired,
};

export default BriefFiltersSection;
