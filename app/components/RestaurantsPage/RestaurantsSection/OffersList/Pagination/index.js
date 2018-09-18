import React from 'react';
import PropTypes from 'prop-types';
import { alto } from 'utils/colors';

import Paragraph from 'components/Paragraph';
import StyledPagination from './StyledPagination';
import StyledPageNumbers from './StyledPageNumbers';
import PagesDots from './PagesDots';

const Pagination = ({ pages, selectedPage }) => (
  <StyledPagination>
    <StyledPageNumbers>
      <Paragraph>{selectedPage}&nbsp;</Paragraph>
      <Paragraph color={alto}>- of {pages}</Paragraph>
    </StyledPageNumbers>
    <PagesDots pages={pages} selectedPage={selectedPage} />
  </StyledPagination>
);

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  selectedPage: PropTypes.number.isRequired,
};

export default Pagination;
