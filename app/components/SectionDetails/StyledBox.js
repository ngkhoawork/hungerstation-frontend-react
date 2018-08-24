import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledBox = styled.div`
  ${flexBox(
    { align: 'flex-start', justify: 'flex-start', direction: 'column' },
    `
    flex: 0.4;
    padding: 57px 36px 50px 103px;
    z-index: 100;
    background: white;
    border-radius: 8px;
  `,
  )};
`;

export default StyledBox;
