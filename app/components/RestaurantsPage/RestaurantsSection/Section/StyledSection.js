import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledSection = styled.div`
  ${flexBox(
    { align: 'flex-start', direction: 'column' },
    `
    position: relative;
    margin-bottom: 70px;
    width: 100%;
  `,
  )};
`;

export default StyledSection;
