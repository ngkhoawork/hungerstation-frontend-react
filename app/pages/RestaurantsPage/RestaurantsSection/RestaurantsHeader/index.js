import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';

import { jade, fuscousGray } from 'utils/css/colors';
import { flex, mediaLess, sideMargin } from 'utils/css/styles';
import { fontFamilyRegular } from 'utils/css/variables';

import { selectVisibleRestaurants } from 'modules/restaurants/selectors';
import Paragraph from 'components/Paragraph';
import SquaredItem from 'components/SquaredItem';
import LocationInput from './LocationInput';

import messages from './messages';

const Wrapper = styled.div`
  ${flex({ align: 'center', justify: 'space-between' })};
  width: 100%;
  margin-bottom: 10px;

  ${mediaLess(600)`
    ${flex({ align: 'flex-start', direction: 'column' }, false)};
  `};
`;

const StyledTitle = styled.div`
  ${flex({ align: 'center', justify: 'center' })};
`;
const Header = styled.span`
  font-family: ${fontFamilyRegular};
  font-size: 30px;
  color: ${fuscousGray};
  ${sideMargin('start', '11px')};
`;
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
      <Header>{intl.formatMessage(messages.header)}</Header>
    </StyledTitle>

    <LocationInput />
  </Wrapper>
);

RestaurantsHeader.propTypes = {
  itemsFound: PropTypes.number.isRequired,
};

export default decorate(RestaurantsHeader);
