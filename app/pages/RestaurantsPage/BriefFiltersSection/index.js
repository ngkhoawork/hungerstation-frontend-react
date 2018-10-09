import React from 'react';
import PropTypes from 'prop-types';
import { filtersCategoryPropTypes } from 'propTypes/filters';
import intl from 'utils/intlService';
import Group from 'components/Group';
import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';

import Header from '../FiltersSection/Header';
import Category from '../FiltersSection/Category';
import Tags from '../FiltersSection/Tags';
import messages from './messages';

const BriefFiltersSection = ({ isModalOpened, tags, openModal }) => (
  <React.Fragment>
    <Header isModalOpened={isModalOpened} />
    <Category
      title={intl.formatMessage(messages.tags)}
      isSectionExpanded={tags.get('isExpanded')}
    >
      <Tags tags={tags} />
    </Category>
    <Group onClick={openModal}>
      <Paragraph margin="0 5px 0 0">
        {intl.formatMessage(messages.moreFilters)}
      </Paragraph>
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
