import React from 'react';
import { number } from 'prop-types';
import styled from 'styled-components';
import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';

const Rating = ({ rating }) => (
  <Wrapper>
    <Icon name="star" offsetY="0" />
    <Paragraph size={12}>{rating}</Paragraph>
  </Wrapper>
);

Rating.propTypes = { rating: number.isRequired };

export default Rating;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  line-height: 1em;
  div > img {
    margin: 4px 3px 0 0 !important;
  }
  & > p {
    margin-right: 0px !important;
  }
`;
