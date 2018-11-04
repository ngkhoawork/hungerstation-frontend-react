import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { flexBox, mediaLess } from 'utils/css/styles';
import Figs from 'images/figs.png';
import FigsMobile from 'images/figs-mobile.png';

const StyledRestaurantCard = styled(Link)`
  ${flexBox({
    align: 'center',
    justify: 'space-between',
    direction: 'column',
  })};
  flex: 1 0 30%;
  max-width: 288px;
  height: 176px;
  border-radius: 8px;
  margin-bottom: 24px;
  margin-right: 24px;
  padding: 15px 15px 5px;
  background-image: url(${Figs});
  background-size: 140%;
  background-position: top;
  box-shadow: 0 10px 20px 0 rgba(126, 125, 125, 0.15);
  cursor: pointer;
  text-decoration: none;

  &:nth-child(3n) {
    margin-right: 0;
  }

  ${mediaLess(500)`
    min-width: 324px;
    background-image: url(${FigsMobile});
    margin-right: 0px;
    background-size: 100%;
  `};
`;

const StyledUpperPart = styled.div`
  ${flexBox({ align: 'center', justify: 'space-between' })};
  width: 100%;
  flex: 0.4;
`;

const StyledBottomPart = styled.div`
  ${flexBox({ align: 'flex-start', direction: 'column' })};
  width: 100%;
  flex: 0.4;

  div > p {
    margin-right: 18px;
  }

  div > img {
    margin-right: 9px;
  }
`;

export { StyledRestaurantCard, StyledUpperPart, StyledBottomPart };
