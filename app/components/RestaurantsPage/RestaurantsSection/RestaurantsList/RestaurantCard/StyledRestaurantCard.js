import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledRestaurantCard = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between', direction: 'column' },
    `
    flex: 1 0 30%;
    height: 150px;
    border: 1px solid green;
    border-radius: 8px;
    margin: 0 20px 20px 0;
    padding: 15px;
  `,
  )};
`;

export default StyledRestaurantCard;
