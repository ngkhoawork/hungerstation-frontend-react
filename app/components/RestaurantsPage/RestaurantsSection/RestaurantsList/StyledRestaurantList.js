import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledRestaurantList = styled.div`
  ${flexBox(
    { align: 'flex-start', justify: 'flex-start' },
    `
    flex-wrap: wrap;
    width: 100%;
  `,
  )};
`;

export default StyledRestaurantList;
