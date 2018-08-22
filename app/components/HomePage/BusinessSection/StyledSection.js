import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledSection = styled.div`
  ${flexBox(
    { justify: 'space-between' },
    `
    margin-top: 150px;
  `,
  )};
`;

export default StyledSection;
