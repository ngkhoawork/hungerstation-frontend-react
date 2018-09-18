import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/styles';

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
  ${mediaLess(1000)`
    flex: 1;
  `};
  ${mediaLess(600)`
    padding: 0;
  `};
`;

export default StyledRestaurantsSection;
