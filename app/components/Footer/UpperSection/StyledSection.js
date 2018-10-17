import styled from 'styled-components';
import { flexBox, mediaMedium, mediaSmall } from 'utils/css/styles';

const StyledSection = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
      padding: 0 113px 48px;
    `,
  )};
  ${mediaMedium`
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 113px 10px;
  `};
  ${mediaSmall`
    align-items: flex-start;
    padding: 20px 40px;
  `};
`;

export default StyledSection;