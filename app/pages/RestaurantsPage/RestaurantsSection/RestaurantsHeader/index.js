import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { jade } from 'utils/css/colors';
import { flexBox, mediaLess } from 'utils/css/styles';

import { selectVisibleRestaurants } from 'modules/restaurants/selectors';
import Paragraph from 'components/Paragraph';
import SquaredItem from 'components/SquaredItem';
import LocationInput from './LocationInput';

const decorate = connect(state => ({
  itemsFound: selectVisibleRestaurants(state).length,
}));

const RestaurantsHeader = ({ itemsFound }) => (
  <Wrapper>
    <StyledTitle>
      <SquaredItem width={45} height={35} color={jade}>
        <Paragraph color="white" size={22}>
          {itemsFound}
        </Paragraph>
      </SquaredItem>
      <Paragraph size={30} margin="0 0 0 11px">
        Restaurants found at
      </Paragraph>
    </StyledTitle>

    <LocationInput />
  </Wrapper>
);

RestaurantsHeader.propTypes = {
  itemsFound: PropTypes.number.isRequired,
};

export default decorate(RestaurantsHeader);

const Wrapper = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `width: 100%; margin-bottom: 10px;`,
  )};

  ${mediaLess(600)`
    align-items: flex-start;
    flex-direction: column;
  `};
`;

const StyledTitle = styled.div`
  ${flexBox({ align: 'center', justify: 'center' })};
`;
