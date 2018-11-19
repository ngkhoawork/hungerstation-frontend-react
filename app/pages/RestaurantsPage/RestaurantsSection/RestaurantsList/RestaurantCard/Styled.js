import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { flex, mediaLess, sideMargin } from 'utils/css/styles';
import { gold } from 'utils/css/colors';
import BgPattern from 'images/bg-pattern.png';

const StyledRestaurantCard = styled(Link)`
  ${flex({
    align: 'center',
    justify: 'space-between',
    direction: 'column',
  })};
  flex: 1 0 30%;
  max-width: 288px;
  height: 176px;
  border-radius: 8px;
  margin-bottom: 24px;
  ${sideMargin('end', '24px')};
  background-image: ${({ cover }) => cover || `url(${BgPattern})`};
  background-color: ${gold};
  background-size: 140%;
  background-position: top;
  box-shadow: 0 10px 20px 0 rgba(126, 125, 125, 0.15);
  cursor: pointer;
  text-decoration: none;

  &:nth-child(3n) {
    ${sideMargin('end', '0px')};
  }

  ${mediaLess(500)`
    min-width: 324px;
    background-image: ${({ cover }) => cover || `url(${BgPattern})`};
    background-color: ${gold};
    ${sideMargin('end', '0px')};
    background-size: 100%;
  `};
`;

const StyledUpperPart = styled.div`
  ${flex({ align: 'flex-start', justify: 'space-between' })};
  width: 100%;
  flex: 0.4;
  padding: 15px 15px 5px 15px;
`;

const StyledBottomPart = styled.div`
  ${flex({ align: 'flex-start', direction: 'column' })};
  background-color: #fff;
  width: 100%;
  padding: 5px 15px 15px 15px;
  flex: 0.4;

  div > p {
    ${sideMargin('end', '18px')};
  }

  div > img {
    ${sideMargin('end', '9px')};
  }
`;

export { StyledRestaurantCard, StyledUpperPart, StyledBottomPart };
