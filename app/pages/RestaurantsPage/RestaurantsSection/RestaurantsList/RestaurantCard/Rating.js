import React from 'react';
import { number } from 'prop-types';
import styled from 'styled-components';
import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';

const Rating = ({ rating }) => (
  <Wrapper>
    <Icon name="star" />
    <Paragraph size={12}>{rating}</Paragraph>
  </Wrapper>
);

Rating.propTypes = { rating: number.isRequired };

export default Rating;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
