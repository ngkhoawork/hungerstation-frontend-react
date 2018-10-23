import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { filtersCategoryPropTypes } from 'propTypes/filters';
import intl from 'utils/intlService';
import Group from 'components/Group';
import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';
import { saveFiltersStageAction } from 'modules/restaurants/actions';
import { toggleModal } from 'hocs/withModal/actions';
import { makeSelectIsOpen } from 'hocs/withModal/selectors';

import Header from '../FiltersSection/Header';
// import Category from '../FiltersSection/Category';
// import Tags from '../FiltersSection/Tags';
import messages from './messages';

const selectIsOpen = makeSelectIsOpen();

const decorate = connect(
  state => ({ isModalOpened: selectIsOpen(state) }),
  { toggleModal, saveFiltersStageAction },
);

const BriefFiltersSection = ({
  isModalOpened,
  // tags,
  toggleModal,
  saveFiltersStageAction,
}) => (
  <React.Fragment>
    <Header isModalOpened={isModalOpened} />
    {/* <Category
      title={intl.formatMessage(messages.tags)}
      isSectionExpanded={true}
    > */}
    {/* <Tags tags={tags} /> */}
    {/* </Category> */}
    <Group
      onClick={() => {
        saveFiltersStageAction();
        toggleModal(true);
      }}
    >
      <Paragraph margin="0 5px 0 0">
        {intl.formatMessage(messages.moreFilters)}
      </Paragraph>
      <Icon name="arrow-circled" size={13} />
    </Group>
  </React.Fragment>
);

BriefFiltersSection.propTypes = {
  isModalOpened: PropTypes.bool.isRequired,
  // tags: filtersCategoryPropTypes,
  toggleModal: PropTypes.func,
  saveFiltersStageAction: PropTypes.func,
};

export default decorate(BriefFiltersSection);
