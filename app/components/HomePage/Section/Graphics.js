import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const Graphics = styled.div`
  ${flexBox(
    { align: 'center', justify: 'flex-start', direction: 'column' },
    `
    flex: 0.5;
  `,
  )};
`;

export default Graphics;
