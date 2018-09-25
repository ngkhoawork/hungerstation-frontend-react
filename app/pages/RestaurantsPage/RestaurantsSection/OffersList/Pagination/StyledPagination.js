import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/css/styles';

const StyledPagination = styled.div`
  ${flexBox(
    { align: 'center' },
    `
    width: 100px;
    position: absolute;
    top: 11px;
    right: 30px;
  `,
  )};
  ${mediaLess(600)`
    display: none;
  `};
`;

export default StyledPagination;
