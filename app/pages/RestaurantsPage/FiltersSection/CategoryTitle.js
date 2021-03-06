import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { jade } from 'utils/css/colors';
import { flex, sideMargin } from 'utils/css/styles';

import Paragraph from 'components/Paragraph';
import CircledItem from 'components/CircledItem';
import Group from 'components/Group';

const StyledTitle = styled.div`
  width: 100%;
  ${flex({ align: 'center', justify: 'space-between' })};
`;

const Wrapper = styled.div`
  ${flex({ align: 'flex-start', direction: 'column' })};
  width: 100%;
  margin: 20px 0;

  &:last-of-type {
    border-bottom: 0;
  }
`;

const Title = styled.span`
  ${sideMargin('end', '5px')};
`;

const CategoryTitle = ({ title, selectionQuantity, withoutQuantity = false }) =>
  title ? (
    <Wrapper>
      <StyledTitle>
        <Group>
          <Paragraph size={18}>
            <Title>{title}</Title>
          </Paragraph>
          {!withoutQuantity && (
            <CircledItem width={15} color={jade}>
              <Paragraph color="white" size={12}>
                {selectionQuantity}
              </Paragraph>
            </CircledItem>
          )}
        </Group>
      </StyledTitle>
    </Wrapper>
  ) : null;

CategoryTitle.propTypes = {
  title: PropTypes.string,
  selectionQuantity: PropTypes.number,
  withoutQuantity: PropTypes.bool,
};

export default CategoryTitle;
