import styled from 'styled-components';
import { flexBox, mediaLarge, mediaLess } from 'utils/styles';

const StyledBox = styled.div`
  ${flexBox(
    { align: 'flex-start', justify: 'flex-start', direction: 'column' },
    `
    width: 100%;
    z-index: 100;
    background: white;
    border-radius: 8px;
  `,
  )};
`;

export default StyledBox;
