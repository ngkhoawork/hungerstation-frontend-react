import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import { wildSand } from 'utils/css/colors';
import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';
import { saveFiltersStageAction } from 'modules/restaurants/actions';
import { selectChosenTagsArray } from 'modules/restaurants/selectors';
import { toggleModal } from 'hocs/withModal/actions';

import Tags, { TagsTiltle } from '../FiltersSection/Tags';
import Header from '../FiltersSection/Header';
import messages from './messages';

const decorate = connect(
  state => ({ chosenTags: selectChosenTagsArray(state) }),
  { toggleModal, saveFiltersStageAction },
);

const BriefFiltersSection = ({
  toggleModal,
  saveFiltersStageAction,
  chosenTags,
}) => (
  <React.Fragment>
    <Header withClear />
    <TagsWrapper>
      <TagsTiltle selectionQuantity={chosenTags.length} />
      <Tags />
    </TagsWrapper>
    <MoreFiltersWrapper
      onClick={() => {
        saveFiltersStageAction();
        toggleModal(true);
      }}
    >
      <Paragraph size={18} margin="0 5px 0 0">
        {intl.formatMessage(messages.moreFilters)}
      </Paragraph>
      <Icon name="arrow-circled" size={18} />
    </MoreFiltersWrapper>
  </React.Fragment>
);

export default decorate(BriefFiltersSection);

BriefFiltersSection.propTypes = {
  toggleModal: PropTypes.func,
  saveFiltersStageAction: PropTypes.func,
  chosenTags: PropTypes.array,
};

const MoreFiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

const TagsWrapper = styled.div`
  border-bottom: 1px solid ${wildSand};
  padding-bottom: 24px;
`;
