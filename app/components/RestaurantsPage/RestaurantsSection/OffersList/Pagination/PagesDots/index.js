import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import StyledDots from './StyledDots';
import Dot from './Dot';

const PagesDots = ({ pages, selectedPage }) => {
  const numArray = Array(...{ length: pages });
  return (
    <StyledDots>
      {numArray.map((page, i) => (
        <Dot key={shortid.generate()} active={selectedPage === i + 1} />
      ))}
    </StyledDots>
  );
};

PagesDots.propTypes = {
  pages: PropTypes.number.isRequired,
  selectedPage: PropTypes.number.isRequired,
};

export default PagesDots;
