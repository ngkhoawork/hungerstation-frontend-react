import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const ActionWrapper = styled.div`
  ${flexBox(
    { align: 'center', justify: 'center' },
    `
    width: 100%;
    padding: 20px 0;
  `,
  )};
`;

export default ActionWrapper;
