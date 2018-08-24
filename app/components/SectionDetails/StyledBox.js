import styled from 'styled-components';
import { flexBox, mediaLarge, mediaLess } from 'utils/styles';

const StyledBox = styled.div`
  ${flexBox(
    { align: 'flex-start', justify: 'flex-start', direction: 'column' },
    `
    width: 550px;
    padding: 57px 36px 50px 103px;
    z-index: 100;
    background: white;
    border-radius: 8px;
    border: 2px solid blue;
  `,
  )};
  ${mediaLarge`
    width: 400px;
  `};
  ${mediaLess(825)`
    width: 90%;
  `};
`;

export default StyledBox;
