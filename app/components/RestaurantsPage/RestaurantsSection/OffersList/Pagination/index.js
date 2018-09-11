import React from 'react';
import PropTypes from 'prop-types';
import { alto } from 'utils/colors';

import Paragraph from 'components/Paragraph';
import StyledPagination from './StyledPagination';

const Pagination = ({ pages, selectedPage }) => (
  <StyledPagination>
    <Paragraph>{selectedPage}&nbsp;</Paragraph>
    <Paragraph color={alto}>- of {pages}</Paragraph>
  </StyledPagination>
);

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  selectedPage: PropTypes.number.isRequired,
};

export default Pagination;
