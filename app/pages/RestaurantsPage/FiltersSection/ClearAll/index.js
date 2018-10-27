import React from 'react';
import { connect } from 'react-redux';
import { func, bool } from 'prop-types';
import intl from 'utils/intlService';
import Icon from 'components/Icon';
import Group from 'components/Group';
import Paragraph from 'components/Paragraph';
import { selectIsFiltersInitial } from 'modules/restaurants/selectors';
import messages from './messages';

const decorate = connect(state => ({
  isFiltersInitial: selectIsFiltersInitial(state),
}));

const ClearAll = ({ resetFilters, isFiltersInitial }) =>
  !isFiltersInitial && (
    <Group onClick={resetFilters}>
      <Paragraph size={12} margin="0 5px 0 0">
        {intl.formatMessage(messages.clearAll)}
      </Paragraph>
      <Icon name="delete" />
    </Group>
  );

ClearAll.propTypes = {
  resetFilters: func,
  isFiltersInitial: bool,
};
export default decorate(ClearAll);
