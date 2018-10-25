import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/css/styles';
import { forwardTo } from 'utils/route';
import { selectCity, selectDistrict } from 'modules/location/selectors';
import Icon from 'components/Icon';

const decorate = connect(state => ({
  city: selectCity(state) && selectCity(state).get('name'),
  district: selectDistrict(state) && selectDistrict(state).get('name'),
}));

const LocationInput = ({ city, district }) => (
  <Wrapper>
    <Icon name="pin" />
    <StyledLocation onClick={() => forwardTo('/')}>
      {city}, {district}
    </StyledLocation>
  </Wrapper>
);

LocationInput.propTypes = {
  city: string,
  district: string,
};

export default decorate(LocationInput);

const StyledLocation = styled.a`
  font-size: 16px;
  font-family: 'HungerStation-Light', sans-serif;
  margin-left: 10px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  ${flexBox(
    { align: 'center' },
    `
    height: 35px;
    padding: 0 15px;
    min-width: 350px;
    margin-right: 22%
  `,
  )};
  img {
    margin-top: 5px;
  }

  ${mediaLess(600)`
    margin-left: 0;
    margin-right: 0;
  `};
`;
