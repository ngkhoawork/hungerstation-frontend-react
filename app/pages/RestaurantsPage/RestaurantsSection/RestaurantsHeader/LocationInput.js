import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  flex,
  mediaLess,
  mediaMedium,
  mediaMediumGreater,
  sideMargin,
} from 'utils/css/styles';
import { fontFamilyLight } from 'utils/css/variables';
import { forwardTo } from 'utils/route';
import { selectCity, selectDistrict } from 'modules/location/selectors';
import Icon from 'components/Icon';

const StyledLocation = styled.a`
  font-size: 16px;
  font-family: ${fontFamilyLight};
  ${sideMargin('start', '10px')};
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 35px;
  padding: 0 15px;
  ${sideMargin('end', '22%')};
  ${flex({ align: 'center' })};

  img {
    margin-top: 5px;
  }

  ${mediaMedium`width: 100%;`};

  ${mediaMediumGreater`min-width: 350px;`};

  ${mediaLess(600)`
    margin-left: 0;
    margin-right: 0;
  `};
`;

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
