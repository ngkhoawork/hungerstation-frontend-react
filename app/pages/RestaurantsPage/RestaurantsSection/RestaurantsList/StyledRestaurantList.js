import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/css/styles';

const StyledRestaurantList = styled.div`
  ${flexBox(
    { align: 'flex-start', justify: 'space-between', direction: 'column' },
    `
    flex-wrap: wrap;
    width: 100%;
  `,
  )};
  position: relative;
  ${mediaLess(1250)`
    justify: flex-start;
  `};
  ${mediaLess(600)`
    flex-wrap: nowrap;
    padding: 20px;
    padding-left: 0;
  `};
`;

export default StyledRestaurantList;
