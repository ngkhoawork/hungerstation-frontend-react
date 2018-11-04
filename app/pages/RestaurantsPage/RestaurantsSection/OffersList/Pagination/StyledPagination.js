import styled from 'styled-components';
import { flex, mediaLess } from 'utils/css/styles';

const StyledPagination = styled.div`
  width: 100px;
  position: absolute;
  top: 11px;
  right: 30px;
  ${flex({ align: 'center' })};

  ${mediaLess(600)`
    display: none;
  `};
`;

export default StyledPagination;
