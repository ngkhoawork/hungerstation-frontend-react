import styled from 'styled-components';
import { flexBox, mediaLarge, mediaLess } from 'utils/styles';

const Graphics = styled.div`
  ${flexBox(
    { align: 'flex-end', justify: 'flex-start', direction: 'column' },
    `
    width: 550px;
    position: relative;
    border: 2px solid red;
  `,
  )};
  ${mediaLarge`
    width: 400px;
  `};
  ${mediaLess(825)`
    width: 10%;
  `};
`;

export default Graphics;
