import styled from 'styled-components';
import { flexBox } from 'utils/styles';

export default styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-evenly' },
    `
      margin-bottom: 16px;

      > * {
        margin: 0 8px;
      }
    `,
  )};
`;
