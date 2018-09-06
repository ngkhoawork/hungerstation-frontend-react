import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/styles';

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
  ${mediaLess(600)`
    right: 20px;
  `};
`;

export default StyledPagination;
