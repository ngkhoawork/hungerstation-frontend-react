import styled from 'styled-components';
import { flex, mediaSmall } from 'utils/css/styles';

const StyledBox = styled.div`
  ${flex({ align: 'center', direction: 'column' })};
  width: 100%;
  z-index: 100;
  background: white;
  border-radius: 8px;
  margin-left: -190px;
  white-space: nowrap;
  ${mediaSmall`
    margin-left: 12px;
    white-space: unset;
    padding-left: 40px;
    `};
`;
export default StyledBox;
