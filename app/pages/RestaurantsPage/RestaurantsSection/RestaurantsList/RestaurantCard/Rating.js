import React from 'react';
import { number } from 'prop-types';
import styled from 'styled-components';
import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';

const Rating = ({ rating }) => (
  <Wrapper>
    <Icon name="star" offsetY={0} />
    <Paragraph size={12}>{rating}</Paragraph>
  </Wrapper>
);

Rating.propTypes = { rating: number.isRequired };

export default Rating;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1em;
`;
