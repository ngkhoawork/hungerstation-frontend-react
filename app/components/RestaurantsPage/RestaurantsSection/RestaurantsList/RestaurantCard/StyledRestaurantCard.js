import styled from 'styled-components';
import { flexBox } from 'utils/styles';
import Figs from 'images/figs.png';

const StyledRestaurantCard = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between', direction: 'column' },
    `
    flex: 1 0 31%;
    height: 150px;
    border-radius: 8px;
    margin: 0 2% 15px 0;
    padding: 15px 15px 5px;
    background-image: url(${Figs});
    background-position: top;
    box-shadow: 0 10px 20px 0 rgba(126, 125, 125, 0.15);
  `,
  )};
`;

export default StyledRestaurantCard;
