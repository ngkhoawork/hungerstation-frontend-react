import React from 'react';
import { number } from 'prop-types';
import intl from 'utils/intlService';
import CategoryTitle from '../CategoryTitle';
import messages from '../messages';

const TagsTitle = ({ selectionQuantity }) => (
  <CategoryTitle
    title={intl.formatMessage(messages.tags)}
    selectionQuantity={selectionQuantity}
  />
);

TagsTitle.propTypes = { selectionQuantity: number };

export default TagsTitle;
