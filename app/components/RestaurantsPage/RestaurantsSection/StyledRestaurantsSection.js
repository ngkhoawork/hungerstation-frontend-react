import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledRestaurantsSection = styled.div`
  ${flexBox(
    {
      align: 'flex-start',
      justify: 'flex-start',
      direction: 'column',
    },
    `
    flex: 0.75;
    border: 2px solid blue;
    padding: 10px 20px;
    overflow: hidden;
  `,
  )};
`;

export default StyledRestaurantsSection;
