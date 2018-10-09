import React from 'react';
import PropTypes from 'prop-types';
import { alto } from 'utils/css/colors';
import intl from 'utils/intlService';
import Paragraph from 'components/Paragraph';
import StyledPagination from './StyledPagination';
import messages from './messages';

const Pagination = ({ pages, selectedPage }) => (
  <StyledPagination>
    <Paragraph>{selectedPage}&nbsp;</Paragraph>
    <Paragraph color={alto}>
      {intl.formatMessage(messages.pageOf, { pages })}
    </Paragraph>
  </StyledPagination>
);

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  selectedPage: PropTypes.number.isRequired,
};

export default Pagination;
