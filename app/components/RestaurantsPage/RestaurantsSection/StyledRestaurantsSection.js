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
    padding: 10px 20px 10px 0;
    overflow: hidden;
    position: relative;
  `,
  )};
`;

export default StyledRestaurantsSection;
