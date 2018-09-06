import styled from 'styled-components';
import { flexBox } from 'utils/styles';

export default styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-evenly' },
    `
      > * {
        margin: 0 8px;
      }
    `,
  )};
`;
