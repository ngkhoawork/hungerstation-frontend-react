import styled from 'styled-components';
import { flexBox, mediaMedium, mediaSmall } from 'utils/styles';

const StyledSection = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
      padding: 0 113px 30px;
    `,
  )};
  ${mediaMedium`
    flex-direction: column;
    align-items: center;
    padding: 100px 20px 30px;
  `};
  ${mediaSmall`
    align-items: flex-start;
  `};
`;

export default StyledSection;
