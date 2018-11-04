import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Icon from 'components/Icon';
import { mediaMedium, mediaLess, flex } from 'utils/css/styles';

const BackIcon = styled.div`
  margin-top: 16px;
  ${flex({ align: 'center', justify: 'center' })};
  height: 17px;
  width: 111px;
  color: #434340;
  line-height: 17px;
  text-align: center;
  margin-right: 190%;

  ${mediaLess(1080)`
    flex: 0 1 30%;
    `};
  ${mediaMedium`
    margin-bottom: 5px;
    padding: 10px;
  `};
`;

const StyledLink = styled(Link)`
  font-size: 14px;
  color: black;
  text-decoration: none;
`;

const Back = () => (
  <BackIcon>
    <StyledLink to="/">
      <Icon name="arrow-back" size={16} />
      &nbsp;Back
    </StyledLink>
  </BackIcon>
);

export default Back;
