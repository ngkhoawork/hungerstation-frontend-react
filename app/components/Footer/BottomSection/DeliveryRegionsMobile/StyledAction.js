import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledAction = styled.div`
  ${flexBox(
    { align: 'flex-end', justify: 'space-between' },
    `
    width: 70px;
  `,
  )};
`;

export default StyledAction;
