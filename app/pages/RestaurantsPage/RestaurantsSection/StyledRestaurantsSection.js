import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/css/styles';

const StyledRestaurantsSection = styled.div`
  ${flexBox(
    {
      align: 'flex-start',
      justify: 'flex-start',
      direction: 'column',
    },
    `
    width: 936px;
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
