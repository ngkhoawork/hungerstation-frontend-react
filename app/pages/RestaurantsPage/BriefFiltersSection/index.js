import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';
import { saveFiltersStageAction } from 'modules/restaurants/actions';
import { toggleModal } from 'hocs/withModal/actions';
import { makeSelectIsOpen } from 'hocs/withModal/selectors';

import Header from '../FiltersSection/Header';
import messages from './messages';

const selectIsOpen = makeSelectIsOpen();

const decorate = connect(
  state => ({ isModalOpened: selectIsOpen(state) }),
  { toggleModal, saveFiltersStageAction },
);

const BriefFiltersSection = ({ toggleModal, saveFiltersStageAction }) => (
  <React.Fragment>
    <Header withClear />

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
};

const MoreFiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;
