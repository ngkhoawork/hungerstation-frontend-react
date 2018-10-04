import styled from 'styled-components';
import { flexBox, mediaMedium } from 'utils/css/styles';

const StyledContainer = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
      margin: 0 24px;
    `,
  )};
  ${mediaMedium`
    justify-content: center;
    margin-bottom: 20px;
  `};
`;

export default StyledContainer;
