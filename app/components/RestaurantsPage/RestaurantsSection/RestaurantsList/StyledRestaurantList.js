import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledRestaurantList = styled.div`
  ${flexBox(
    { align: 'flex-start', justify: 'space-between', direction: 'column' },
    `
    flex-wrap: wrap;
    width: 100%;
  `,
  )};
  position: relative;
`;

export default StyledRestaurantList;
