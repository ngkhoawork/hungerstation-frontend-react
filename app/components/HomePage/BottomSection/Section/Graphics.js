import styled from 'styled-components';
import { flexBox, mediaLarge } from 'utils/styles';

const Graphics = styled.div`
  ${flexBox(
    { align: 'flex-end', justify: 'flex-start', direction: 'column' },
    `
    width: 550px;
    position: relative;
  `,
  )};
  ${mediaLarge`
    width: 400px;
  `};
`;

export default Graphics;
