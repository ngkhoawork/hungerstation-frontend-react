import styled from 'styled-components';
import { flexBox, mediaMedium } from 'utils/css/styles';

const StyledContainer = styled.span`
  ${flexBox(
    { align: 'center' },
    `
    flex: 0.3;
  `,
  )};
  ${mediaMedium`
    flex: 1;
    justify-content: center;
  `};
`;

export default StyledContainer;
