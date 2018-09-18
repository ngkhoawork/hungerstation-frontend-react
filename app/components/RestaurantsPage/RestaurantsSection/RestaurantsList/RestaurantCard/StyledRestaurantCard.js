import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/styles';
import Figs from 'images/figs.png';
import FigsMobile from 'images/figs-mobile.png';

const StyledRestaurantCard = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between', direction: 'column' },
    `
    flex: 1 0 30%;
    max-width: 260px;
    height: 150px;
    border-radius: 8px;
    margin-bottom: 25px;
    padding: 15px 15px 5px;
    background-image: url(${Figs});
    background-position: top;
    box-shadow: 0 10px 20px 0 rgba(126, 125, 125, 0.15);
    cursor: pointer;
  `,
  )};
  ${mediaLess(1250)`
    flex: 1 0 40%;
    max-width: 340px;
  `};
  ${mediaLess(1000)`
    flex: 1 0 30%;
    max-width: 260px;
  `};
  ${mediaLess(860)`
    flex: 1 0 40%;
    max-width: 45%;
  `};
  ${mediaLess(600)`
    flex: 1 0 100%;
    min-width: 70%;
    align-self: center;
    height: 170px;
    background-image: url(${FigsMobile});
  `};
  ${mediaLess(500)`
    min-width: 100%;
  `};
`;

export default StyledRestaurantCard;
