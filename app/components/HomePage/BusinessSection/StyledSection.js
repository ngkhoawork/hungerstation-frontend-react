import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledSection = styled.div`
  ${flexBox(
    { justify: 'flex-end' },
    `
    margin-left: 300px;
    margin-top: 150px;
    width: 60%;
  `,
  )};
`;

export default StyledSection;
