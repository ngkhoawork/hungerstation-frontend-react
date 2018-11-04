import styled from 'styled-components';
import { flexBox } from 'utils/css/styles';

const StyledBox = styled.div`
  width: 100%;
  z-index: 100;
  background: white;
  border-radius: 8px;
  ${flexBox({
    align: 'flex-start',
    justify: 'flex-start',
    direction: 'column',
  })};
`;

export default StyledBox;
