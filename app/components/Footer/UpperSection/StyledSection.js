import styled from 'styled-components';
import { flexBox, mediaMedium } from 'utils/styles';

const StyledSection = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
      padding: 100px 113px 30px;
    `,
  )};
  ${mediaMedium`
    flex-direction: column;
    align-items: flex-start;
    padding: 100px 20px 30px;
  `};
`;

export default StyledSection;
