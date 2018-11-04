import styled from 'styled-components';
import { flex } from 'utils/css/styles';

const StyledSelect = styled.div`
  background-color: white;
  max-height: 220px;
  width: 200px;
  overflow-y: scroll;
  position: absolute;
  z-index: 1000;
  border-radius: 8px;
  ${flex({ direction: 'column' })};
`;

export default StyledSelect;
