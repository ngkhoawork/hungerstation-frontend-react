import styled from 'styled-components';
import { flexBox, mediaMedium } from 'utils/styles';

const StyledSection = styled.div`
  ${flexBox(
    { justify: 'space-between' },
    `
    margin-top: 150px;
  `,
  )};
  ${mediaMedium`
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  `};
`;

export default StyledSection;
