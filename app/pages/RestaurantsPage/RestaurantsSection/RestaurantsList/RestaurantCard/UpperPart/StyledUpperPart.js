import styled from 'styled-components';
import { flexBox } from 'utils/css/styles';

const StyledUpperPart = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
    width: 100%;
    flex: 0.2;
  `,
  )};
`;

export default StyledUpperPart;
