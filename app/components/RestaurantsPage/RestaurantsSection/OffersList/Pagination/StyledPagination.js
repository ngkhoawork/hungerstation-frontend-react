import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledPagination = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
    width: 100px;
    position: absolute;
    top: 10px;
    right: 0;
  `,
  )};
`;

export default StyledPagination;
