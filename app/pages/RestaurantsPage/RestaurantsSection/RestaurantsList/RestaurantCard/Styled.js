import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/css/styles';
import Figs from 'images/figs.png';
import FigsMobile from 'images/figs-mobile.png';

const StyledRestaurantCard = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between', direction: 'column' },
    `
    flex: 1 0 30%;
    max-width: 288px;
    height: 176px;
    border-radius: 8px;
    margin-bottom: 24px;
    margin-right: 24px;
    padding: 15px 15px 5px;
    background-image: url(${Figs});
    background-position: top;
    box-shadow: 0 10px 20px 0 rgba(126, 125, 125, 0.15);
    cursor: pointer;
  `,
  )};

  &:nth-child(3n) {
    margin-right: 0;
  }

  ${mediaLess(500)`
    min-width: 324px;
    background-image: url(${FigsMobile});
    margin-right: 0px;
  `};
`;

const StyledUpperPart = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
    width: 100%;
    flex: 0.2;
  `,
  )};
`;

const StyledBottomPart = styled.div`
  ${flexBox(
    { align: 'flex-start', direction: 'column' },
    `
    width: 100%;
    flex: 0.38;
    div > p {
      margin-top: 4px;
      margin-right: 10px;
    }
    div > img {
      margin-right: 5px;
    }
  `,
  )};
`;

export { StyledRestaurantCard, StyledUpperPart, StyledBottomPart };