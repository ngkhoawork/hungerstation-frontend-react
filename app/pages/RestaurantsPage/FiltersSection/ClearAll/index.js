import React from 'react';
import { func } from 'prop-types';
import intl from 'utils/intlService';
import Icon from 'components/Icon';
import Group from 'components/Group';
import Paragraph from 'components/Paragraph';
import messages from './messages';

const ClearAll = ({ resetFilters }) => (
  <Group onClick={resetFilters}>
    <Paragraph size={12} margin="0 5px 0 0">
      {intl.formatMessage(messages.clearAll)}
    </Paragraph>
    <Icon name="delete" />
  </Group>
);

ClearAll.propTypes = {
  resetFilters: func,
};
export default ClearAll;
