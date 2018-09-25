import styled from 'styled-components';
import { flexBox } from 'utils/css/styles';

const StyledAction = styled.div`
  ${flexBox(
    { align: 'flex-end', justify: 'space-between' },
    `
    width: 60px;
    margin-bottom: 5px;
  `,
  )};
`;

export default StyledAction;
