import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { jade, wildSand } from 'utils/css/colors';
import { flexBox } from 'utils/css/styles';

import Paragraph from 'components/Paragraph';
import CircledItem from 'components/CircledItem';
import Group from 'components/Group';

const CategoryTitle = ({ title, selectionQuantity }) => (
  <Wrapper>
    <StyledTitle>
      <Group>
        <Paragraph size={17} margin="0 5px 0 0">
          {title}
        </Paragraph>
        <CircledItem width={15} color={jade}>
          <Paragraph color="white" size={12}>
            {selectionQuantity}
          </Paragraph>
        </CircledItem>
      </Group>
    </StyledTitle>
  </Wrapper>
);

CategoryTitle.propTypes = {
  title: PropTypes.string.isRequired,
  selectionQuantity: PropTypes.number,
};

export default CategoryTitle;

const StyledTitle = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
    width: 100%;
    margin-bottom: 17px;
  `,
  )};
`;

const Wrapper = styled.div`
  ${flexBox(
    { align: 'flex-start', direction: 'column' },
    `
    width: 100%;
    margin: 20px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid ${wildSand};
  `,
  )};
  &:last-of-type {
    border-bottom: 0;
  }
`;
