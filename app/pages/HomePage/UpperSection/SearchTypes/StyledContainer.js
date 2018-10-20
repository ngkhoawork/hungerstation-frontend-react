import styled from 'styled-components';
import { flexBox, mediaMedium } from 'utils/css/styles';

const StyledContainer = styled.div`
  ${flexBox(
    { align: 'center', justify: 'flex-end' },
    `
      margin: 0 12px;
    `,
  )};
  ${mediaMedium`
    justify-content: center;
    margin-bottom: 20px;
  `};
`;

export default StyledContainer;
